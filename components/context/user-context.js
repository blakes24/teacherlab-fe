import { createContext } from "react";

export const UserContext = createContext({
  user: {},
  setUser: (user) => {
    this.user = user;
  }
});

export default UserContext;