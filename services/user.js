import { getLoggedInUser, isAuthenticated } from "./auth";
import { protectedFetcher } from "./utils";

export const getSubjects = function () {
  const { id } = getLoggedInUser();

  return protectedFetcher(`/users/${id}/subjects`, {
    method: "GET",
  });
};
