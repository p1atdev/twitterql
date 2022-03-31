import { Endpoint, Variables } from "../types/mod.ts";
import { TwitterAuthToken as Token } from "../param/token.ts";
import { getGuestToken } from "../twitter/mod.ts";
import { getQueryIds } from "../twitter/query/get_query_ids.ts";
import { Query } from "../types/mod.ts";

/**
 * @param endpoint
 * @param variables
 * @param guestToken
 * @returns
 */
const QLRequest = async (
  endpoint: Endpoint,
  variables?: Variables,
  OAuthToken?: string,
  guestToken?: string,
  queries?: Query[],
) => {
  // first get query ids
  const _queries = queries ?? (await getQueryIds());
  // get the corresponding query id
  const queryId =
    _queries.filter((query) =>
      query.operationName === endpoint.operationName
    )[0].queryId;

  const url = new URL(
    [endpoint.host.host, queryId, endpoint.operationName].join("/"),
  );

  const headers: HeadersInit = {
    Authorization: `Bearer ${Token}`,
  };

  if (endpoint.needAuth) {
    const _guestToken: string = guestToken ?? (await getGuestToken());
    headers["x-guest-token"] = _guestToken;
  }

  if (endpoint.needOAuth) {
    if (!OAuthToken) {
      throw Error(`Endpoint ${endpoint.operationName} needs OAuth Token.`);
    }
    headers["cookie"] = `auth_token=${OAuthToken}`;
  }

  // console.log(headers)

  try {
    const variableJSON = JSON.stringify(variables ?? {});
    url.search = new URLSearchParams({ variables: variableJSON }).toString();
    const res = await fetch(url.toString(), {
      method: endpoint.method,
      headers: headers,
    });

    return res;
  } catch (err) {
    throw Error("Failed to request graphql endpoint: " + err);
  }
};

const LegacyRequest = async (
  endpoint: Endpoint,
  variables?: Variables,
  OAuthToken?: string,
  guestToken?: string,
) => {
  const headers: HeadersInit = {
    Authorization: `Bearer ${Token}`,
  };

  if (endpoint.needAuth) {
    const _guestToken: string = guestToken ?? (await getGuestToken());
    headers["x-guest-token"] = _guestToken;
  }

  const query = (() => {
    if (variables) {
      // set query params
      const queryParams = new URLSearchParams();
      Object.entries(variables).forEach(([key, value]) => {
        queryParams.set(key, value);
      });
      return `?${queryParams.toString()}`;
    } else {
      return "";
    }
  })();

  // console.log(headers)

  const url = endpoint.host.host + endpoint.path + query;

  // console.log(url)

  try {
    const res = await fetch(url, {
      method: endpoint.method,
      headers: headers,
    });

    return res;
  } catch (err) {
    throw Error("Failed to fetch:" + err);
  }
};

const V2Request = async (
  endpoint: Endpoint,
  variables?: Variables,
  OAuthToken?: string,
  guestToken?: string,
) => {
  const headers: HeadersInit = {
    Authorization: `Bearer ${Token}`,
  };

  if (endpoint.needAuth) {
    const _guestToken: string = guestToken ?? (await getGuestToken());
    headers["x-guest-token"] = _guestToken;
  }

  const query = (() => {
    if (variables) {
      // set query params
      const queryParams = new URLSearchParams();
      Object.entries(variables).forEach(([key, value]) => {
        queryParams.set(key, value);
      });
      return `?${queryParams.toString()}`;
    } else {
      return "";
    }
  })();

  // console.log(headers)

  const url = endpoint.host.host + endpoint.path + query;

  // console.log(url)

  try {
    const res = await fetch(url, {
      method: endpoint.method,
      headers: headers,
    });

    // console.log(res)

    return res;
  } catch (err) {
    throw Error("Failed to fetch:" + err);
  }
};

const MiscRequest = async (
  endpoint: Endpoint,
  variables?: Variables,
  OAuthToken?: string,
  guestToken?: string,
) => {
  const headers: HeadersInit = {
    Authorization: `Bearer ${Token}`,
  };

  if (endpoint.needAuth) {
    const _guestToken: string = guestToken ?? (await getGuestToken());
    headers["x-guest-token"] = _guestToken;
  }

  const query = (() => {
    if (variables) {
      // set query params
      const queryParams = new URLSearchParams();
      Object.entries(variables).forEach(([key, value]) => {
        queryParams.set(key, value);
      });
      return `?${queryParams.toString()}`;
    } else {
      throw Error("V2Request requires variables.");
    }
  })();

  const url = endpoint.host.host + endpoint.path + query;

  try {
    const res = await fetch(url, {
      method: endpoint.method,
      headers: headers,
    });

    return res;
  } catch (err) {
    throw Error("Failed to fetch:" + err);
  }
};

/**
 * @param endpoint
 * @param variables
 * @returns
 */
export const TQLRequest = async (
  endpoint: Endpoint,
  variables?: Variables,
  queries?: Query[],
  OAuthToken?: string,
  guestToken?: string,
) => {
  switch (endpoint.host.type) {
    case "gql": {
      const res = await QLRequest(
        endpoint,
        variables,
        OAuthToken,
        guestToken,
        queries,
      );
      return res;
    }
    case "v1.1": {
      const res = await LegacyRequest(
        endpoint,
        variables,
        OAuthToken,
        guestToken,
      );
      return res;
    }
    case "v2": {
      const res = await V2Request(endpoint, variables, OAuthToken, guestToken);
      return res;
    }
    case "i": {
      const res = await MiscRequest(
        endpoint,
        variables,
        OAuthToken,
        guestToken,
      );
      return res;
    }
    default: {
      throw Error("Unknown host type.");
    }
  }
};
