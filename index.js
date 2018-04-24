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
//console.log(play.charArray);
var hiddenWord = play.returnString();
var userExp = function ()   {

    if (play.guessRemain > 0)   {
    
    if (hiddenWord.trim().includes("_"))   {
        inquirer.prompt([
      {
        type: "prompt",
        message: "Please guess a letter",
        name: "guess"
      }
    
    ])
        .then(function(response) {
        console.log(play.guessLetter(response.guess));
        if (!play.word.includes(response.guess) && !play.charArray.includes(response.guess))    {
            console.log("Wrong guess");
            play.guessRemain--;
            console.log(play.guessRemain +  " guesses remaining \n");
        }
        userExp();
      });

    }
    else  {
        console.log("You WON! Nice Job!")
        // hiddenWord = null;
        // //play = "new";
        // play = new Word(golfWords[wordMath]);
        // play.letterFunc();
        // hiddenWord = play.guessLetter();
        // play.guessRemain = 5;
        // userExp();

    }
        }
        else   {
        console.log("Game Over, the word was " + play.word +  " ...Try again!");
        // hiddenWord = null;
        // //play = "new";
        // play = new Word(golfWords[wordMath]);
        // play.letterFunc();
        // hiddenWord = play.guessLetter();
        // play.guessRemain = 5;
        // userExp();
        

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
