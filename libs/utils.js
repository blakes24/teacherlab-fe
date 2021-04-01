export const addUnderscoresToString = function (str) {
  const strArr = str.split(" ");

  if (strArr.length <= 1) return str;

  return strArr.join("_");
};
