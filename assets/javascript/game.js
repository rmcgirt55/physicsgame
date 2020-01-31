var wins = 0;
var losses = 0;
var guess = 9;
var alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var lettersUsed = [];

var randomletter = alphabet[Math.floor(Math.random () * alphabet.length)];

var postWins = document.getElementById("wins");
var postLosses = document.getElementById("losses");
var postguessesleft = document.getElementById("guessremaining");
var postGuessesGuesses = document.getElementById("guessesSoFar")

document.onkeyup = function(event) {
    var userselected = event.key;
    lettersUsed.push(userselected);

    if (userselected === randomletter) {
        wins++;
        randomletter = alphabet[Math.floor(Math.random () * alphabet.length)];
        guessremaining = 9;
        lettersUsed = [];
    } else {
        guessremaining--;
    }
    
    if (guessremaining === 0) {
        losses++
        randomletter = alphabet[Math.floor(Math.random () * alphabet.length)];
        guessremaining = 9;
        lettersUsed = [];
    }

postWins.innerHTML = "Wins: " + wins;
postLosses.innerHTML = "Losses: " + losses;
postguessesleft.innerHTML = "Guesses Left: " + guessremaining;
postGuessesGuessed.innerHTML = "Letters Guesses: " + lettersUsed;

};