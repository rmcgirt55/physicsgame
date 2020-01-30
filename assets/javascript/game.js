var wins=0;
var losses=0;
var guessesR=9;
var alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var lettersTried = [];

var Random = alphabet[Math.floor(Math.random () * alphabet.ength)];

var pwins = document.getElementById("wins");
var plosses = document.getElementById("losses");
var pguessesr = document.getElementById("guessesR");
var plettersU = document.getElementById("guesseU")

document.onkeyup = funtion(event) {
    var userPick = event.key;
    lettersTried.push(userPick);

    if (userPick=== computerPick) {
        wins++;
        computerPick= alphabet[Math.floor(math.random () * alphabet.length)];
        guessesR=9;
        lettersTried=[];
    } elese {
        guessesR --;
    }
    if (guessesR === 0) {
        losses++
        computerPick = alphabet.length)];
        guessesR = 9;
        lettersTried=[];
    }

    pwins.innerHTML="Wins: " + wins;
    plosses.innerHTML = "Losses: " + losses;
    pguessesr.innerHTML= "Guesses Remaining: " + guessesR;
    plettersU=innerHTML="Letters Used: " + lettersTried;

};