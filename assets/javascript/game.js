//count down attempts, -1 out of 9 for each wrong answer, goes into negative attempts...  
//script broke after adding the the two lines below: 
//userLetters.push(playerGuess); //user guess is pushed into the userLetters array 
//document.write(discardLetter); //print discardLetter, which is taken from the userLetters array with pushed values
//reset game once attempts hits 0
//wins/losses does not reset after attempts hit 0

//window.onload = function () {

// array for psychic choices  
var letters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

// on page score and attempts keeping 
	var wins = 0;
	var losses = 0;
	var guessesLeft = 9; 
	var discardLetters = []; 

// declaring this function so it loads up default stats on the page when it loads 
outputStats();

// When the user presses the key it records the keypress and then sets it to userguess
document.onkeyup = function(event) {
	var playerGuess = String.fromCharCode(event.keyCode).toLowerCase();

	// This sets the computer guess equal to the random.
	var psychicGuess = letters[Math.floor(Math.random() * letters.length)];

	function reset() {
			if (guessesLeft < 1){ //when guessesLeft == 0 
				discardLetters.splice(0, discardLetters.length); //clears out user pushed array 
					//reset guessesLeft counter to 9

			}
		}

	// originally had playerGuess == letters, that did not work >>> do a for loop to go over letters array 
	//if ( i = 0; i < letters.length; i++) {   //loop breaks everything... 
	if ((playerGuess == 'a') || (playerGuess == 'b') || (playerGuess == 'c') || (playerGuess == 'd') || (playerGuess == 'e') || (playerGuess == 'f') || (playerGuess == 'g') || (playerGuess == 'h') || (playerGuess == 'i') || (playerGuess == 'j') || (playerGuess == 'k') || (playerGuess == 'l') || (playerGuess == 'm') || (playerGuess == 'n') || (playerGuess == 'o') || (playerGuess == 'p') || (playerGuess == 'q') || (playerGuess == 'r') || (playerGuess == 's') || (playerGuess == 't') || (playerGuess == 'u') || (playerGuess == 'v') || (playerGuess == 'w') || (playerGuess == 'x') || (playerGuess == 'y') || (playerGuess == 'z')){
		if ((playerGuess == psychicGuess)){
			wins++;
			//reset(guessesLeft = 0); //reset the game 
		}else if ((playerGuess !== psychicGuess)){
			losses++;
			guessesLeft--;
			discardLetters.push(playerGuess); 
			reset(); 
	}

		
/*
	function reset(){
		if (guessesLeft == 0_ {
		}
		guessLeft
	}
*/
/*	function(reset) {
			if (guessLeft < 1) {
			document.write("you loose");
			guessesLeft = 9; 

		}
	}
*/	

		}
	


		// this will call the outputStats() function 
		// will constantly
		outputStats();
		

}
	
	function outputStats(){
		document.getElementById('wins').innerHTML = wins;
		document.getElementById('losses').innerHTML = losses; 
		document.getElementById('guessesLeft').innerHTML = guessesLeft; 
		document.getElementById('discardLetters').innerHTML = discardLetters;
	}

















