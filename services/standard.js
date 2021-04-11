import { protectedFetcher } from "./utils";

export const getStandardsBySetId = function (setId) {
  return protectedFetcher(`/standards/${setId}`, {
    method: "GET",
  });
};
