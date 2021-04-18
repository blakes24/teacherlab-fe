import { fetcher } from "./utils";
import storage from "../libs/storage";

// TODO
// logout
// isLoggedIn

const login = (credentials) => {
  return fetcher("/login", {
    method: "POST",
    body: JSON.stringify(credentials),
  });
};

const logout = () => {
  storage.remove("AUTH_TOKEN");
  storage.remove("user");
};

const getLoggedInUser = () => {
  return storage.get("user");
};

const isAuthenticated = () => {
  return storage.get("AUTH_TOKEN");
};

export { login, logout, isAuthenticated, getLoggedInUser };
