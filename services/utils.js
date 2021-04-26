import { isAuthenticated } from "./auth";

const CONTENT_TYPE_JSON = {
  "Content-Type": "application/json",
};

const fetcher = (...args) => {
  const options = {
    ...args[1],
    headers: {
      ...CONTENT_TYPE_JSON,
      ...args[1].headers,
    },
  };

  return fetch(
    `${process.env.NEXT_PUBLIC_API_BASE_URL}${args[0]}`,
    options
  ).then((res) => res.json());
};

const protectedFetcher = (...args) => {
  const token = isAuthenticated();

  const options = {
    ...args[1],
    headers: {
      ...CONTENT_TYPE_JSON,
      ...args[1].headers,
      Authorization: `Bearer ${token}`,
    },
  };

  return fetch(
    `${process.env.NEXT_PUBLIC_API_BASE_URL}${args[0]}`,
    options
  ).then((res) => res.json());
};

export { fetcher, protectedFetcher };
