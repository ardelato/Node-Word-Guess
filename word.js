var Letter = require("./letter.js");

var Word = function (word) {
  this.wordArray = [];
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
    this.wordArray.forEach((letter) => {
      letter.check(character);
    });
  };
};

module.exports = Word;

var newWord = new Word("Test");
