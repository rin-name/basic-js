const CustomError = require("../extensions/custom-error");

class VigenereCipheringMachine {
  constructor(direction) {
    this.direction = direction;
  }

  encrypt(message, key) {
    if (!message || !key) throw new Error("Все пропало");
    message = message.toUpperCase();
    key = key.toUpperCase();

    let alphabet = [];
    for (let i = 65; i < 91; i++) {
      alphabet.push(String.fromCharCode(i));
    }

    let res = '';
    for (let i = 0, j = 0; i < message.length; i++, j++) {
      if (alphabet.includes(message[i])) {
        let index = (alphabet.indexOf(message[i]) + alphabet.indexOf(key.charAt(j % key.length))) % alphabet.length;
        res += alphabet[index];
      } else {
        j -= 1;
        res += message[i];
      }
    }
    return (this.direction === false) ? res.split('').reverse().join('') : res;
  }

  decrypt(encryptedMessage, key) {
    if (!encryptedMessage || !key) throw new Error();
    encryptedMessage = encryptedMessage.toUpperCase();
    key = key.toUpperCase();

    let alphabet = [];
    for (let i = 65; i < 91; i++) {
      alphabet.push(String.fromCharCode(i));
    }

    let res = '';
    for (let i = 0, j = 0; i < encryptedMessage.length; i++, j++) {
      if (alphabet.includes(encryptedMessage[i])) {
        let index = ((alphabet.indexOf(encryptedMessage[i]) + alphabet.length) - alphabet.indexOf(key.charAt(j % key.length))) % alphabet.length;
        res += alphabet[index];
      } else {
        j -= 1;
        res += encryptedMessage[i];
      }
    }
    return (this.direction === false) ? res.split('').reverse().join('') : res;
  }
}
module.exports = VigenereCipheringMachine;
