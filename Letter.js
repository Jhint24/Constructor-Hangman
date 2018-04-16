//Constructor built of the letter of the word 
function Letter (character, guessed,)   {
    this.character = character,
    this.guessed = false,
    //character correct or incorrect function 
    this.underscore = function ()   {
        if (this.character === " ")   {
            return " ";
        }
        else if (this.guessed === true)  {
            return "_ "
        }
        else { 
            return this.character
        }
    }

//function that takes a character as an argument and calls the guess function
    this.checkChar = function (guess)   {
        if (guess === this.character)   {
            this.guessed = true
        }

        return this.underscore();
    }
}  

module.exports = Letter;