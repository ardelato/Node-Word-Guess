var Word = require("./word.js");
var inquirer = require("inquirer");
var numGuesses = 10;
var word;
var guesses = [];

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
  } else {
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
        if (guesses.includes(inquirerResponse.guess)) {
          console.log(
            "\x1b[34m%s\x1b[0m",
            "Already guesses that! Enter a different Letter!\n"
          );
          word.print();
          console.log();
        } else {
          if (word.check(inquirerResponse.guess)) {
            console.log("\x1b[32m%s\x1b[0m", "Correct!!!\n");
            word.print();
            console.log();
          } else {
            console.log("\x1b[31m%s\x1b[0m", "Incorrect!!!");
            console.log(
              "\x1b[31m%i%s\x1b[0m",
              --numGuesses,
              " guesses remaining!\n"
            );
            word.print();
            console.log();
          }
          guesses.push(inquirerResponse.guess);
        }
        if (word.completed()) {
          console.log("You got it right! Next word!\n");
          round_Word = randomWord();
          console.log(round_Word);
          word = new Word(round_Word);
          word.print();
        }
        loop();
      });
  }
}

function main() {
  round_Word = randomWord();
  console.log(round_Word);
  word = new Word(round_Word);
  word.print();
  loop();
}

main();
