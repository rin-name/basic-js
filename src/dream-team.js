const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam(members) {
  if (!Array.isArray(members)) return false;
  members = members.filter(item => typeof item === "string");
  members = members.map(item => item.trim().substring(0, 1).toUpperCase()).sort();
  let res = members.join("");
  return res;
};
