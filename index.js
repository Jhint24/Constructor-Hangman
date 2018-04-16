var Word = require ("./Word");
var inquirer = require("inquirer");
//remaining guesses put into word.js
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

    var blankCounter = 0;
	for (var i = 0; i < play.word.length; i++) {
		if (play.returnString()[i] === "_") {
			blankCounter++;
    if (play.guessRemain > 0 && blankCounter > 0)   {
  inquirer.prompt([
      {
        type: "prompt",
        message: "Please guess a letter",
        name: "guess"
      }
    
    ])
      .then(function(response) {
        console.log(play.guessLetter(response.guess));
      if (play.guessRemain > 0 && blankCounter > 0) {
        userExp()
        }
      });

    }
    else {
        return "game over!"

    }
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
