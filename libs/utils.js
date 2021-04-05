export const addUnderscoresToString = function (str) {
  if (!str) return;

  const strArr = str.split(" ");

  if (strArr.length <= 1) return str;

  return strArr.join("_");
};

export const formatDateForForm = function (date) {
  return new Date(date).toISOString();
};

export const generateRandomId = function () {
  return "_" + Math.random().toString(36).substr(2, 9);
};
