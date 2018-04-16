//Constructor built of the letter of the word 
function Letter (character)   {
    this.character = character,
    this.guessed = false,
    //character correct or incorrect function 
    this.underscore = function ()   {
        if (this.character === true)   {
            return this.character;
        }
        else    {
            return "_ ";
        }
    }

//takes a character as an argument and checks it against the underlying character //make guess function in other file
    this.checkChar = function (guess)   {
        if (guess === this.character)   {
            this.guessed = true
        }

        return this.underscore();
    }
}  

module.exports = Letter;