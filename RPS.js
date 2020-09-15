// 1 - Rock; 2 - Paper; 3 - Scissors

// Declaring Variables
var playerChoice;
var aiChoice;
var playerScore = 0;
var playerLosses = 0;
var choices = ["Rock", "Paper", "Scissors"];


function playGame() {
    // Game loop
    for (var i = 0; i < 1; i++) {

        // prompt asking for user choice
        playerChoice = prompt("Rock(1), Paper(2), or Scissors(3)?");

        //slerting user of their choice
        alert("You Chose " + choices[playerChoice - 1]);

        //generating computer choice
        aiChoice = Math.ceil(Math.random() * 3);

        //alert of computer choice
        alert("The Computer Chose " + choices[aiChoice - 1])

        // Conditionals to determine the outcome of the game
        if (playerChoice == aiChoice) {

            alert("You Tied!");

        } else if (playerChoice == 1 && aiChoice == 2) {

            alert("You Lose!");
            playerLosses++;

        } else if (playerChoice == 1 && aiChoice == 3) {

            alert("You Win!");
            playerScore++;

        } else if (playerChoice == 2 && aiChoice == 1) {

            alert("You Win!");
            playerScore++;

        } else if (playerChoice == 2 && aiChoice == 3) {

            alert("You Lose!");
            playerLosses++;

        } else if (playerChoice == 3 && aiChoice == 1) {

            alert("You Lose!");
            playerLosses++;

        } else if (playerChoice == 3 && aiChoice == 2) {

            alert("You Win!");
            playerScore++;

        } else {
            alert("Something Went Wrong");
        }

        //alerting user of their wins and losses after each game
        alert("Total Wins: " + playerScore + "\n" + "Total Losses: " + playerLosses);

    }
}