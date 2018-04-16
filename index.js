var Word = require ("./Word");
var inquirer = require("inquirer");
//remaining guesses
var guessRemain = 10;
//randomly selects a word
//word bank
//var word = new Word("play");
var golfWords = ["green", "fairway", "putter", "sandtrap", "bunker", "hazard", "driver", "wedge", "caddy", "clubhouse", "golfcart", "teebox", "iron", "range", "fore", "mulligan", "provisional"];
var wordMath = Math.floor(Math.random() * (golfWords.length + 1));
//console.log(wordMath);
var play = new Word(golfWords[wordMath]);
//returns object
play.letterFunc();
console.log(play.charArray);

var userExp = function ()   {
inquirer
  .prompt([
      {
        type: "prompt",
        message: "guess letter?",
        name: "guess"
      }
    ])
      .then(function(response) {
        console.log(play.guessLetter(response.guess));
    userExp()
      });

    }
// console.log(play.word);
// console.log(play.letterFunc());
// console.log(play.charArray);

// console.log(play.guessLetter)
//prompts user for guess
//use inquirer
// function prompt ()  {
//     var blanks = 
// if (guessRemain > 0)
// }
userExp();
