import { protectedFetcher } from "./utils";

export const getQuestions = function (subjectId) {
  return protectedFetcher(`/questions/${subjectId}`, {
    method: "GET",
  });
};
