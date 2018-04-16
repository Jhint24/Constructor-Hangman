var Letter = require ("./Letter");

function Word (word)    {
    //An array of new Letter objects representing the letters of the underlying word
    this.word = word,   
    this.charArray = [],
    this.guessRemain = 5,
    //A function that returns a string representing the word
    this.letterFunc = function()    {
    for (var i = 0; i < this.word.length; i++)  {
        this.charArray.push(new Letter(word[i]));

    }
}

    this.returnString = function()    {
        var wordDisplayed = "";
        for (var i = 0; i < this.word.length; i++) {
            wordDisplayed += this.charArray[i].revealCharacter();
        } 
        return wordDisplayed;
    }
    // function that takes a character as an argument and calls the guess function on each letter object (the second function defined in Letter.js)
    this.guessLetter = function (character) {
        for (var i = 0; i < this.charArray.length; i++) {
            this.charArray[i].checkChar(character);
        }
        return this.returnString();
    }
//var grandma = new Word("mom");
// console.log(grandma);
// grandma.guessLetter();
// console.log(grandma.charArray);
//console.log(grandma.toString())


}
module.exports = Word;