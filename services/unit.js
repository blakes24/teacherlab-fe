import { protectedFetcher } from "./utils";

export const createUnit = function (data) {
  return protectedFetcher("/units", {
    method: "POST",
    body: JSON.stringify(data),
  });
};

export const getUnit = function(unitId) {
  return protectedFetcher(`/units/${unitId}`, {
    method: "GET"
  });
}
