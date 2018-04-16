function Letter (character, guessed,)   {
    this.character = character,
    this.guessed = false,
    this.underscore = function ()   {
        if (this.guessed)   {
            return this.character + " ";
        }
        else {
            return "_"
        }
    }
//     this.check = function (guess)    {
//         if (guess === this.character)    {
//             this.guessed = true;
//         }
//     }
    }  