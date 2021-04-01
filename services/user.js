import { getLoggedInUser, isAuthenticated } from "./auth";
import { fetcher } from "./utils";

export const getSubjects = function () {
  const { id } = getLoggedInUser();
  const token = isAuthenticated();

  return fetcher(`/users/${id}/subjects`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  });
};
