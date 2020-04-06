var Letter = require("./letter.js");

var Word = function (word) {
  this.wordArray = [];
  Array.prototype.forEach.call(word, (c) => {
    this.wordArray.push(new Letter(c));
  });
  this.print = function () {
    var word = "";
    this.wordArray.forEach((letter) => {
      if (letter.letter != " ") {
        word += letter.reveal() + " ";
      } else {
        word += "  ";
      }
    });
    console.log(word);
  };
  this.check = function (character) {
    var found = false;
    this.wordArray.forEach((letter) => {
      if(letter.check(character)){
          found = true;
      }
    });
    return found;
  };
};

module.exports = Word;

var newWord = new Word("Test");
