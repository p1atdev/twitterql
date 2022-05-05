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

    const url: URL = (() => {
      if (endpoint.host.type === "gql") {
        const queryId = this.queryIds.filter((query) =>
          query.operationName === endpoint.operationName
        )[0].queryId;
        return new URL(
          [endpoint.host.host, queryId, endpoint.operationName].join("/"),
        );
      } else {
        return new URL([endpoint.host.host, endpoint.path!].join(""));
      }
    })();

    if (endpoint.host.type === "gql") {
      url.search = new URLSearchParams({
        variables: JSON.stringify({
          ...endpoint.initialVariables,
          ...variables,
        }),
      }).toString();
    } else if (endpoint.method === "GET") {
      url.search = new URLSearchParams({
        ...endpoint.initialVariables,
        ...variables,
      }).toString();
    }

    // console.log(this.headers);
    // console.log(url.toString());

    if (endpoint.method === "GET") {
      const res: Res = await fetch(url.toString(), {
        method: endpoint.method,
        headers: this.headers,
      }).then((res) => res.json()).catch((err) => {
        console.error(err);
        throw err;
      });

      return res;
    } else if (endpoint.method === "POST") {
      this.headers.set("content-type", "application/json");

      const res: Res = await fetch(url.toString(), {
        method: endpoint.method,
        headers: this.headers,
        body: JSON.stringify({
          ...endpoint.initialVariables,
          ...variables,
        }),
      }).then((res) => {
        const contentType = res.headers.get("content-type");
        if (contentType && contentType.includes("application/json")) {
          return res.json();
        } else {
          return res.text();
        }
      }).catch((err) => {
        console.error(err);
        throw err;
      });

      return res;
    } else {
      throw Error("Unsupported method");
    }

    // console.log(res);
  }
}
