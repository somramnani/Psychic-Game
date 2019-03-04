




   
// Create the alphabet
var alphabet = [ "a" ,"b" , "c" , "d" , "e"  , "f"  , "g"  , "h", "i" ,
                  "j"  , "k"  , "l"  , "m"  ,"n" , "o" , "p" , "q", "r" ,"s", 
                  "t", "u" , "v", "w" , "x", "y", , "z"];




// Creating variables to hold the number of wins, losses, and ties. They start at 0.

var wins = 0;
var losses = 0;
var guessCount = 0;

// Create variables that hold references to the places in the HTML where we want to display things.
var directionsText = document.getElementById("directions-text");
var userChoiceText = document.getElementById("userchoice-text");
var computerChoiceText = document.getElementById("computerchoice-text");
var winsText = document.getElementById("wins-text");
var lossesText = document.getElementById("losses-text");
var guessText =  document.getElementById("guess-text");

document.onkeyup = function(event){
    // Grabbing the users guess when they press on the keyboard
    var userGuess =  event.key;
    
    // Create the computers letter
    var computerGuess = alphabet[Math.floor(Math.random() * alphabet.length)];
    
 
    if (userGuess === computerGuess){
        wins++;
        
    }
    else{
        losses++;
     
    }

    



 // Hide the directions
    directionsText.textContent = "";

    userChoiceText.textContent = "You chose: " + userGuess;
    computerChoiceText.textContent = "The computer chose: " + computerGuess;
  
    winsText.textContent = "Wins: " + wins;
    lossesText.textContent = "Losses: " + losses;
      guessText.textContent = "Guesses:" + guessCount;
   
    

};

