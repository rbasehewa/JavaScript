// create a secret Number
var secretNumber = 4;

// ask user for guess 
var stringGuess = prompt("Guess a number");

var guess = Number(stringGuess);

// check if guess is right
if(guess === secretNumber){
    alert("You got it right!");
}
// otherwise, if guess is higher
else if(guess > secretNumber){
    alert("Too high, Guess again!");
}

// otherwise, if guess is lower
else{
    alert("Too low, Guess again!")
}