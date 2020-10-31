const CustomError = require("../extensions/custom-error");

module.exports = function getSeason(date) {
  if (date === undefined) return 'Unable to determine the time of year!';
  if (!(Object.prototype.toString.call(date) === "[object Date]") && isNaN(date) && (!date)) throw new Error('Проверь дату с ней какая-то фигня!');
  switch (+date.getMonth()) {
    case 11:
    case 0:
    case 1:
      return "winter";
    case 3:
    case 4:
    case 2:
      return "spring";
    case 6:
    case 7:
    case 5:
      return "summer";
    case 9:
    case 10:
    case 8: return "autumn";
    default:
      return false;
  }
};