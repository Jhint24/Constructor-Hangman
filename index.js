var Word = require ("./Word");
var inquirer = require("inquirer");
//remaining guesses
var guessRemain = 10;
//randomly selects a word
//word bank
var word = new Word("play");
var golfWords = ["green", "fairway", "putter", "sandtrap", "bunker", "hazard", "driver", "wedge", "caddy", "clubhouse", "golfcart", "teebox", "iron", "range", "fore", "mulligan", "provisional"];
var wordMath = Math.floor(Math.random() * (golfWords.length + 1));
//prompts user for guess
//use inquirer