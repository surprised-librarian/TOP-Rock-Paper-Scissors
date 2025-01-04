//Function to get Computer Choice

let computerPlay;

function getComputerChoice() {
    let computerChoice = Math.floor(Math.random() * 3);
    if (computerChoice === 0) {
        computerPlay = 'rock';
    } else if (computerChoice === 1) {
        computerPlay = 'paper'
    } else {
        computerPlay = 'scissors'
    }
}

//Function to get User Choice

let userPlay;

function getUserChoice() {
    userPlay = prompt('Choose rock, paper, or scissors.').toLowerCase;
}

//Declare score variables

let humanScore = 0;
let computerScore = 0;

//Function to play 1 round

function playRound() {
    getUserChoice();
    getComputerChoice();
    console.log("Computer chooses " + computerPlay);
    console.log("User chooses " + userPlay);
    if (computerPlay === userPlay){
        console.log("It's a tie!");
    }   else if (userPlay == 'rock') {
        if (computerPlay == 'paper') {
            computerScore++;
            console.log("Computer wins!");
        } else {
            humanScore++;
            console.log("You win!");
        }
    }   else if (userPlay == 'paper') {
        if (computerPlay == 'rock') {
            humanScore++;
            console.log("You win!");
        } else {
            computerScore++;
            console.log("Computer wins");
        }
    }   else {
        if (computerPlay == 'rock') {
            computerScore++;
            console.log("Computer wins!");
        } else {
            humanScore++;
            console.log("You Win!");
        }
    }

}

playRound();