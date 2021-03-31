import { fetcher } from "./utils";

// TODO
// logout
// isLoggedIn

const login = (credentials) => {
  return fetcher("/login", {
    method: "POST",
    body: JSON.stringify(credentials),
    headers: {
      'Content-Type': 'application/json'
    }
  });
};

export { login };
