//Constructor built of the letter of the word 
function Letter (character)   {
    this.character = character,
    this.guessed = false,
    //character correct or incorrect function 
    this.revealCharacter = function ()   {
        if (this.character === " ")    {
            return " ";
        }
        else if (this.guessed === true)   {
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
        //HINT: If you name your letter's display function toString, JavaScript will call that function automatically whenever casting that object to a string
        //return this.toString();
    }
}  

//var grandma = new Letter("f");
// console.log(grandma);
//console.log(grandma.toString());
// grandma.guessed = true;
// console.log(grandma.toString);
// grandma.checkChar("f");
// console.log(grandma.guessed);

module.exports = Letter;