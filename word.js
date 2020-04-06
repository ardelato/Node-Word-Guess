var Letter = require("./letter.js");

var Word = function (word) {
  this.wordArray = [];
  this.word = word;
  Array.prototype.forEach.call(word, (c) => {
    this.wordArray.push(new Letter(c));
  });
  this.print = function () {
    var word = "";
    this.wordArray.forEach((letter) => {
      word += letter.reveal() + " ";
    });
    console.log(word);
  };
  this.check = function (character) {
    var found = false;
    this.wordArray.forEach((letter) => {
      if (letter.check(character)) {
        found = true;
      }
    });
    return found;
  };
  this.completed = function () {
    var complete = true;
    this.wordArray.forEach((letter) => {
      if (letter.reveal() === "_") {
        complete = false;
      }
    });
    return complete;
  };
};

module.exports = Word;
