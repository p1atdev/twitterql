import { getGuestToken } from "./twitter/mod.ts";
import { Endpoint, Query as TQuery, Variables } from "./types/mod.ts";
import { TwitterAuthToken as Token } from "./param/token.ts";
import { getQueryIds } from "./twitter/query/get_query_ids.ts";

export class TwitterQLClient {
  headers: Headers;

  guestId?: string;
  queryIds?: TQuery[];

  constructor() {
    this.headers = new Headers({
      Authorization: `Bearer ${Token}`,
    });
  }

  async setup(oauthToken?: string) {
    [this.guestId, this.queryIds] = await Promise
      .all([
        getGuestToken(),
        getQueryIds(),
      ]);

    if (!this.guestId) {
      throw Error("Failed to get guest token");
    }

    this.headers.set("x-guest-token", this.guestId);

    if (oauthToken) {
      this.headers.set("cookie", `auth_token=${oauthToken}`);
    }
  }

  async request<Res>(
    { endpoint, variables }: {
      endpoint: Endpoint;
      variables: Variables;
      // queries?: TQuery[];
    },
  ): Promise<Res> {
    if (!this.guestId || !this.queryIds) {
      throw Error("Client not setup");
    }

    const queryId =
      this.queryIds.filter((query) =>
        query.operationName === endpoint.operationName
      )[0].queryId;

    const url: URL = (() => {
      if (endpoint.host.type === "gql") {
        return new URL(
          [endpoint.host.host, queryId, endpoint.operationName].join("/"),
        );
      } else {
        return new URL([endpoint.host.host, endpoint.path!].join("/"));
      }
    })();

    if (endpoint.host.type === "gql") {
      url.search = new URLSearchParams({
        variables: JSON.stringify({
          ...endpoint.initialVariables,
          ...variables,
        }),
      }).toString();
    } else {
      url.search = new URLSearchParams({
        ...endpoint.initialVariables,
        ...variables,
      }).toString();
    }

    // console.log(this.headers);
    // console.log(url.toString());

    const res: Res = await fetch(url.toString(), {
      method: endpoint.method,
      headers: this.headers,
    }).then((res) => res.json());

    // console.log(res);

    return res;
  }
}
