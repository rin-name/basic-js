const CustomError = require("../extensions/custom-error");

module.exports = function repeater(str, options) {
  function repStr(str, sep, count) {
    let Str2 = "";
    for (i = 1; i <= count; i++) {
      Str2 = Str2 + String(str);
      if (i < count) {
        Str2 = Str2 + sep;
      }
    }
    if (str && count === undefined) {
      return str;
    }
    else {return Str2;}
  }

  let addStr = repStr(
      options.addition,
      options.additionSeparator || "|",
      options.additionRepeatTimes
  );

  return repStr(str + addStr, options.separator || "+", options.repeatTimes);
};
  