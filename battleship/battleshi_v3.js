// Declare Variable
var randomLoc = Math.floor(Math.random()*5);
var shipLocation = [randomLoc, randomLoc + 1, randomLoc + 2];
// Stored ship locations inside the array

var guess;
var hits = 0;
var guesses = 0;
var isSunk = false;

// Game Logic

while(!isSunk){
    guess = prompt("Ready!, Aim!, Fire! (Enter number from 0-6)");

    if (guess == null){
        alert("Thank you for playing!");
        break;
    }

    guess = parseInt(guess, 10)
    // Convert input to a number base 10

    if (isNaN(guess) || guess < 0 || guess > 6){
        alert("Please enter a vailid number! (0-6)");
        continue;
        // Skip the code
    }

    guesses++;

    const hitIndex = shipLocation.indexOf(guess);

    if (hitIndex !== -1){   // -1 means not found
        alert("Hit")
        shipLocation.splice(hitIndex, 1);
        hits++;
        if (shipLocation.length === 0){
            isSunk = true;
            alert("You have successfully sunk the ship!")
        }
    } else{
        alert("Miss")
    }
}

// Display Stats
var accuracy = (guesses > 0 ? (hits / guesses) * 100 : 0).toFixed(2);

var stats = "You took " + guesses + " guesses to sink the battleship! " + "\n" + 
"Accuracy: " + accuracy + "%";

alert(stats);