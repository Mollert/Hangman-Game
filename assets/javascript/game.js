
var dogName = ["Fido", "Rex", "Rover", "Spot", "Bowser", "Trixy"];

var stages = ["assets/images/hangman_empty.jpg", "assets/images/hangman_head.jpg", "assets/images/hangman_body.jpg", "assets/images/hangman_leg1.jpg", "assets/images/hangman_leg2.jpg", "assets/images/hangman_arm1.jpg", "assets/images/hangman_arm2.jpg"];

var chosenDogName = "";

var splitDogName = [];

var guess = "";
var wrongGuess = true;
var numberRightGuesses = 0;
var numberWrongGuesses = 0;
var wins = 0;
var losses = 0;

	function removeGuesses() {
		document.getElementById("wrongLetter1").innerHTML = "";
		document.getElementById("wrongLetter2").innerHTML = "";
		document.getElementById("wrongLetter3").innerHTML = "";
		document.getElementById("wrongLetter4").innerHTML = "";
		document.getElementById("wrongLetter5").innerHTML = "";
		document.getElementById("wrongLetter6").innerHTML = "";
	}

	removeGuesses();

	function choseDogName() {
		chosenDogName = dogName[Math.floor(Math.random() * dogName.length)];
	}

	choseDogName();

	function changeLetterNumber() {
 		document.getElementById("howMany").innerHTML = "This dog's name has " + chosenDogName.length + " letters.";
 	}

 	changeLetterNumber();

	function showDogNameSpaces() {
			if (1 < chosenDogName.length) {
				document.getElementById("rightLetter1").innerHTML = "_";
			}
			if (2 <= chosenDogName.length) {
				document.getElementById("rightLetter2").innerHTML = "_";
			}
			if (3 <= chosenDogName.length) {
				document.getElementById("rightLetter3").innerHTML = "_";
			}
			if (4 <= chosenDogName.length) {
				document.getElementById("rightLetter4").innerHTML = "_";
			}
			if (5 <= chosenDogName.length) {
				document.getElementById("rightLetter5").innerHTML = "_";
			}
			if (6 <= chosenDogName.length) {
				document.getElementById("rightLetter6").innerHTML = "_";
			}
	}

  showDogNameSpaces();

	function splitTheName() {
		splitDogName = chosenDogName.split("");
	}

	splitTheName();

	document.onkeyup = function(event) {
		guess = event.key;
		wrongGuess = true;
		if (guess.toUpperCase() === splitDogName[0]) {
			document.getElementById("rightLetter1").innerHTML = guess.toUpperCase();
			numberRightGuesses ++
			wrongGuess = false;
		}
		if (guess === splitDogName[1]) {
			document.getElementById("rightLetter2").innerHTML = guess;
			numberRightGuesses ++
			wrongGuess = false;
		}
		if (guess === splitDogName[2]) {
			document.getElementById("rightLetter3").innerHTML = guess;
			numberRightGuesses ++
			wrongGuess = false;
		}
		if (chosenDogName.length > 3 && guess === splitDogName[3]) {
			document.getElementById("rightLetter4").innerHTML = guess;
			numberRightGuesses ++
			wrongGuess = false;
		}
		if (chosenDogName.length > 4 && guess === splitDogName[4]) {
			document.getElementById("rightLetter5").innerHTML = guess;
			numberRightGuesses ++
			wrongGuess = false;
		}
		if (chosenDogName.length > 5 && guess === splitDogName[5]) {
			document.getElementById("rightLetter6").innerHTML = guess;
			numberRightGuesses ++
			wrongGuess = false;
		}
		if (wrongGuess === true) {
			if (numberWrongGuesses === 0) {
				document.getElementById("wrongLetter1").innerHTML = guess;
				document.getElementById("playing").src = stages[numberWrongGuesses+1];
			}
			if (numberWrongGuesses === 1) {
				document.getElementById("wrongLetter2").innerHTML = guess;
				document.getElementById("playing").src = stages[numberWrongGuesses+1];
			}
			if (numberWrongGuesses === 2) {
				document.getElementById("wrongLetter3").innerHTML = guess;
				document.getElementById("playing").src = stages[numberWrongGuesses+1];
			}
			if (numberWrongGuesses === 3) {
				document.getElementById("wrongLetter4").innerHTML = guess;
				document.getElementById("playing").src = stages[numberWrongGuesses+1];
			}
			if (numberWrongGuesses === 4) {
				document.getElementById("wrongLetter5").innerHTML = guess;
				document.getElementById("playing").src = stages[numberWrongGuesses+1];
			}
			if (numberWrongGuesses === 5) {
				document.getElementById("wrongLetter6").innerHTML = guess;
				document.getElementById("playing").src = stages[numberWrongGuesses+1];
			}
			numberWrongGuesses ++
		}

		if (numberRightGuesses === chosenDogName.length) {
			wins ++
			document.getElementById("wins").innerHTML = "Wins = " + wins;
			document.getElementById("win-loss").innerHTML = "That's a win!!!";
		}

		if (numberWrongGuesses === 6) {
			losses ++
			document.getElementById("losses").innerHTML = "Losses = " + losses;
			document.getElementById("win-loss").innerHTML = "The dog name was " + chosenDogName + ".";
		}
	}

	function clearDogNameSpaces() {
		document.getElementById("rightLetter1").innerHTML = "";
		document.getElementById("rightLetter2").innerHTML = "";
		document.getElementById("rightLetter3").innerHTML = "";
		document.getElementById("rightLetter4").innerHTML = "";
		document.getElementById("rightLetter5").innerHTML = "";
		document.getElementById("rightLetter6").innerHTML = "";
	}

	function reset() {
		removeGuesses();
		choseDogName();
		clearDogNameSpaces();
		changeLetterNumber();
		showDogNameSpaces();
		splitTheName();
		document.getElementById("playing").src = stages[0];
		document.getElementById("win-loss").innerHTML = "";
		numberRightGuesses = 0;
		numberWrongGuesses = 0;
	}

	$("#start").on("click", function() {
		reset();
		wins = 0;
		document.getElementById("wins").innerHTML = "Wins = " + wins;
		losses = 0;
		document.getElementById("losses").innerHTML = "Losses = " + losses;
		console.log(chosenDogName)
	});

	$("#newGame").on("click", function() {
		reset();
		console.log(chosenDogName)
	});

 	   console.log(chosenDogName)
