// Random Locations
var randomLoc = Math.floor(Math.random() * 5);

// Declaring Variable for Locations
var location1 = randomLoc;
var location2 = location1 + 1;
var location3 = location2 + 1;

var guess;
var hits = 0;
var guesses = 0;  

var isSunk = false;

// Game Logic
while (isSunk == false) {
    guess = prompt("Ready!, Aim!, Fire! 🎯 (Enter Number 0-6)");

    if (guess == null){
        alert("Next Time I guess.");
        break;
    }

    if (guess < 0 || guess > 6) {
        alert("Please Enter a Valid (Perfect) Cell Number!");
    }else {
        guesses = guesses + 1;

        if (guess == location1 || guess == location2 || guess == location3) {
            hits = hits + 1;
            alert("Hit!");

                if (hits == 3) {
                    isSunk = true;
                    alert("You Sank my Battleship🚀");
                }
        } else {
            alert("Miss!");
        }
    }
} 

var accuracy = (guesses > 0 ? (hits / guesses) * 100 : 0).toFixed(2);
var stats = "You took " + guesses + " guesses to sink the battleship! " + "\n" + "Accuracy: " + accuracy + "%" 

alert(stats);
