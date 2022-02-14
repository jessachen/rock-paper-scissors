/* 
PROBLEM: The computer doesn't know anything. So we need to make sure that it stores
'Rock', 'Paper', and 'Scissors' and that it can randomly select one of these choices
in order to play the game. 

The computer stores the strings 'Rock', 'Paper', and 'Scissors' in an array.
Creat a function to randomly select one of these choices.
The function contains a variable expression that generates a random number between 0 and 3, a range set
based on the length of the array.
The function uses this number as an index position to select and return the corresponding item in the array. */

let computerOption = ["Rock", "Paper", "Scissors"]; // The computer stores the strings 'Rock', 'Paper', and 'Scissors' in an array.//

function computerPlay () {
    const random = Math.floor(Math.random() * computerOption.length) // generates a random number between 0 and 3, a range set based on the length of the array. //
    return computerOption[random] //Use the results of the random expression as an index position to select and return the corresponding item in the array.//
}

/* 
PROBLEM: The computer doesn't know how to play RPS. We need an algorithm that allows
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
ELSE return: "It's a tie!"
*/

let playerSelection = prompt("Rock, paper, or scissors?").toLowerCase();
let computerSelection = computerPlay().toLowerCase();

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

console.log(playRound(playerSelection, computerSelection));