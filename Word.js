var Letter = require ("./Letter");

function Word ()    {
    this.charArray = [],
    this.wordString = function()    {
        var wordDisplayed = "";
        for (var i = 0; i < this.charArray.length; i++) {
            wordDisplayed += this.charArray[i].wordString();
        } 
        return wordDisplayed;
    }
    this.
}
