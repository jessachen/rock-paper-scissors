/* PROBLEM: The computer doesn't know anything. So we need to make sure that it stores
'Rock', 'Paper', and 'Scissors' and that it can randomly select one of these choices
in order to play the game. 

Store the strings 'Rock', 'Paper', and 'Scissors' in an array.
Generate a random number between 0 and the length of the array.
Use this number as an index position to select and return the corresponding item in the array. */

let computerOption = ["Rock", "Paper", "Scissors"]; // The computer stores the strings 'Rock', 'Paper', and 'Scissors' in an array.//

function computerPlay () {
    const random = Math.floor(Math.random() * computerOption.length) // generates a random number between 0 and 3, a range set based on the length of the array. //
    return computerOption[random] //Use the results of the random expression as an index position to select and return the corresponding item in the array.//
}

/* PROBLEM: The computer doesn't know how to play RPS. We need an algorithm that allows
it to play. 

The player inputs a selection of either Rock, Paper, or Scissors.
The computer makes a random selection of RPS.
IF the player selects rock and the computer selects paper, return: "You lose! Paper beats rock."
ELSE IF the computer selects scissors, return: "You win! Rock beats scissors."
ELSE return: "It's a tie!"

IF the player selects paper and the computer selects scissors, return: "You lose! Scissors beats paper."
ELSE IF the computer selects rock, return: "You win! Paper beats rock."
ELSE return: "It's a tie!"

IF the player selects scissors and the computer selects rock, return: "You lose! Rock beats scissors."
ELSE IF the computer selects paper, return: "You win! Scissors beats paper."
ELSE return: "It's a tie!" */

function playRound (playerSelection, computerSelection) {
    
    if (playerSelection === "rock" && computerSelection === "paper") {
        return "You lose! Paper beats rock.";
    } else if (playerSelection === "rock" && computerSelection === "scissors") {
        return "You win! Rock beats scissors.";
    } 

    if (playerSelection === "paper" && computerSelection === "scissors") {
        return "You lose! Scissors beats paper.";
    } else if (playerSelection === "paper" && computerSelection === "rock") {
        return "You win! Paper beats rock.";
    } 

    if (playerSelection === "scissors" && computerSelection === "rock") {
        return "You lose! Rock beats scissors.";
    } else if (playerSelection === "scissors" && computerSelection === "paper") {
        return "You win! Scissors beats paper.";
    } 

    if (playerSelection === computerSelection) {
        return "It's a tie!";
    }
}

/* Initialize score variables for player and computer
Loop from 0 to 5 
Prompt the user for input
Have the computer make a selection
Play a round
If the computer wins, add one to its score
If the player wins, add one to their score
At the end of each round, print the score 
After 5 rounds, print the game outcome: win, lose, or tie */

function clicked(e) {
    let playerSelection = this.id;
    let computerSelection = computerPlay().toLowerCase();
    console.log(playRound(playerSelection, computerSelection));
}
const buttons = document.querySelectorAll('button');
        buttons.forEach(button => button.addEventListener('click', clicked))

function game() {
    let playerScore = 0;
    let computerScore = 0;

    for (; ;/* let i = 0; i < 5; i++ */) {
        /* let playerSelection = prompt("Rock, paper, or scissors?").toLowerCase(); */
        /*let computerSelection = computerPlay().toLowerCase();*/

        if (playerSelection === "rock" && computerSelection === "paper") {
            computerScore += 1;
        } else if (playerSelection === "rock" && computerSelection === "scissors") {
            playerScore += 1;
        } 
    
        if (playerSelection === "paper" && computerSelection === "scissors") {
            computerScore += 1;
        } else if (playerSelection === "paper" && computerSelection === "rock") {
            playerScore += 1;
        } 
    
        if (playerSelection === "scissors" && computerSelection === "rock") {
            computerScore += 1;
        } else if (playerSelection === "scissors" && computerSelection === "paper") {
            playerScore += 1;
        } 

        console.log( `Player: ${playerScore}, Computer: ${computerScore}`)
    }

    if (playerScore > computerScore) {
        console.log("You beat the computer! Nice work.")
    } else if (computerScore > playerScore) {
        console.log("You lost to the computer. Try again!")
    } else if (playerScore = computerScore) {
        console.log("You tied with the computer... So close.")
    }
}