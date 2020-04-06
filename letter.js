// Contains a constuctor, Letter.
var Letter = function (letter) {
  this.letter = letter;
  this.guessed = letter === " " ? true : false;
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
      return true;
    }
    return false;
  };
};

module.exports = Letter;
