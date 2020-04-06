// Contains a constuctor, Letter.
var Letter = function (letter) {
  this.letter = letter;
  this.guessed = false;
  this.reveal = function () {
    if (this.guessed) {
      return this.letter;
    } else {
      return "_";
    }
  };
  this.check = function (guess) {
    if (guess.toLowerCase() == this.letter.toLowerCase()) {
      this.guessed = true;
    }
  };
};

module.exports = Letter;

var newLetter = new Letter("c");
