var Word = require("./word.js");
var inquirer = require("inquirer");
var numGuesses = 10;

var word_Bank = [
  "Test",
  "Letter",
  "Thomas the Train",
  "Gandorf",
  "Alphabet",
  "Zebra",
];

function randomWord() {
  console.log(word_Bank);
  return word_Bank[Math.floor(Math.random() * 6)];
}

function loop() {
  if (numGuesses <= 0) {
    console.log("GAME OVER!");
    return;
  }
}

function main() {
  var round_Word = randomWord();
  console.log(round_Word);
  var word = new Word(round_Word);
  inquirer.prompt([
    {
      type: "input",
      message: "Guess a letter! ",
      name: "guess",
      validate: function (guess) {
        if (guess.length !== 1) {
          return false || "You must enter a single letter";
        }
        return true;
      },
    },
  ]);
}

main();
