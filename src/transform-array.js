const CustomError = require("../extensions/custom-error");

module.exports = function transform(arr) {
  if (!Array.isArray(arr)) throw new Error ('Проверь входные данные на входе не массив!');
  if (!(arr.includes("--discard-next") || arr.includes("--discard-prev") || arr.includes("--double-next") || arr.includes("--double-prev"))) return arr;
  let transform = arr.slice(0);
  if (transform[0] === "--discard-prev" || transform[0] === "--double-prev") transform.shift();
  if (transform[transform.length - 1] === "--discard-next" || transform[transform.length - 1] === "--double-next") transform.pop();
  for (let i = 0; i < transform.length; i++) {
    switch (transform[i]) {
      case "--discard-next":
        if (transform[i+2] === "--double-prev" || transform[i+2] === "--discard-prev") transform.splice(i+2, 1);
        transform.splice(i, 2);
        i = i - 1;
        break;
      case "--discard-prev":
        transform.splice((i - 1), 2);
        i = i - 1;
        break;
      case "--double-next":
        transform.splice(i, 1, transform[i + 1]);
        break;
      case "--double-prev":
        transform.splice(i, 1, transform[i - 1]);
        break;
      default:
        break;
    }
  }
  return transform;
};
