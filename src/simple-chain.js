const CustomError = require("../extensions/custom-error");

const chainMaker = {
  arr: [],

  getLength() {
    return this.arr.length;
  },

  addLink(value) {
    this.arr.push(`( ${value} )`);
    return this;
  },

  removeLink(position) {
    if (!Number.isInteger(position) || position < 1 || position > this.arr.length) {
      this.arr = [];
      throw Error ('Проверь вводные данные они некорректные');}
    this.arr.splice(position - 1, 1);
    return this;
  },

  reverseChain() {
    this.arr.reverse();
    return this;
  },

  finishChain() {
    let array = this.arr.slice();
    this.arr = [];
    return array.join("~~");
  }
};

module.exports = chainMaker;
