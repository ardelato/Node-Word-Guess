var Word = require("./word.js");
var inquirer = require("inquirer");
var numGuesses = 10;

var word_Bank = [
  "Test Test",
  "Letter letter",
  "Thomas the Train",
  "Gandorf The Great",
  "Alphabet Alphabet",
  "Zebra Zebra",
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
  word.print();
  inquirer
    .prompt([
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
    ])
    .then(function (inquirerResponse) {
      if (word.check(inquirerResponse.guess)) {
        console.log("\x1b[32m%s\x1b[0m", "Correct!!!\n");
        word.print();
        console.log("\n");
      } else {
        console.log("\x1b[31m%s\x1b[0m", "Incorrect!!!\n");
        console.log(
          "\x1b[31m%i%s\x1b[0m",
          --numGuesses,
          " guesses remaining!\n"
        );
      }
    });
}

main();
