//Function to get Computer Choice

function getComputerChoice() {
    let computerChoice = Math.floor(Math.random() * 3);
    if (computerChoice === 0) {
        return 'rock';
    } else if (computerChoice === 1) {
        return 'paper';
    } else {
        return 'scissors';
    }
}

//Function to get User Choice

function getUserChoice() {
    return prompt('Choose rock, paper, or scissors.');
}

//Declare score variables

let humanScore = 0;
let computerScore = 0;

