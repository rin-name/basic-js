const CustomError = require("../extensions/custom-error");

module.exports = class DepthCalculator {
  calculateDepth(arr) {
    if(arr.every(item => !Array.isArray(item))) {
      return 1;
    }
    else return (1 + this.calculateDepth(arr.flat(1)));
  }
};