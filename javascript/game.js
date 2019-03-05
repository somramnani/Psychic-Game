
// Create the alphabet
var alphabet = [ "a" ,"b" , "c" , "d" , "e"  , "f"  , "g"  , "h", "i" ,
                  "j"  , "k"  , "l"  , "m"  ,"n" , "o" , "p" , "q", "r" ,"s", 
                  "t", "u" , "v", "w" , "x", "y", , "z"];

// Creating variables to hold the number of wins, losses, guessCount, and the array for the users guesses. 
var wins = 0;
var losses = 0;
var guessCount = 9;
var currentGuesses  = [];

// Create variables that hold references to the places in the HTML where we want to display things.
var directionsText = document.getElementById("directions-text");
var userChoiceText = document.getElementById("userchoice-text");

var winsText = document.getElementById("wins-text");
var lossesText = document.getElementById("losses-text");
var guessText =  document.getElementById("guess-text");

 // Create the computers random letter
var computerGuess = alphabet[Math.floor(Math.random() * alphabet.length)];

document.onkeyup = function(event){
    
    // Grabbing the users guesses when they press on the keyboard
    var userGuess =  event.key;
    currentGuesses.push(userGuess);
    
    if (userGuess === computerGuess){
        alert("You won! The letter I was thinking of was " + computerGuess);
        wins++; 
        // sets  the guess counter back to 9
        guessCount = 9;

        //Erases the current guesses the user has guessed
        currentGuesses.length = 0;

        // Resets the computer guesss
        computerGuess = alphabet[Math.floor(Math.random() * alphabet.length)];
        
    }// if the user is out of guesses:
    else if (guessCount === 0){
        alert("You lost! The letter I was thinking of was " + computerGuess);
        
        // increaess the losses counter
        losses++;

        //Erases the current guesses the user has guessed
        currentGuesses.length = 0;
        
        // sets  the guess counter back to 9
        guessCount = 9;
         // Resets the computer guesss
        computerGuess = alphabet[Math.floor(Math.random() * alphabet.length)];
    }  
    else {
      // If none of the others are true decrease the guesses
        guessCount--;
    }

     // Hide the directions
    directionsText.textContent = "";

    userChoiceText.textContent = "You chose: " + currentGuesses;
    winsText.textContent = "Wins: " + wins;
    lossesText.textContent = "Losses: " + losses;
    guessText.textContent = "Guesses:" + guessCount;
}


