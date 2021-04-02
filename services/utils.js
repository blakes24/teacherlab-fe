import { API_BASE_URL } from "./config";
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

  return fetch(`${API_BASE_URL.local}${args[0]}`, options).then((res) =>
    res.json()
  );
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

  return fetch(`${API_BASE_URL.local}${args[0]}`, options).then((res) =>
    res.json()
  );
};

export { fetcher, protectedFetcher };
