import { API_BASE_URL } from "./config";

const fetcher = (...args) => {
  return fetch(`${API_BASE_URL.local}${args[0]}`, args[1]).then((res) =>
    res.json()
  );
};

export { fetcher };
