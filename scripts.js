//Function to get Computer Choice

function getComputerChoice() {
    let computerChoice = Math.floor(Math.random() * 3);
    let computerPlay = (computerChoice === 0) ? 'rock' : (computerChoice === 1) ? 'paper' : (computerChoice ===3) ? 'scissors';
    return computerPlay;
}

//Function to get User Choice

function getUserChoice() {
    let userPlay = prompt('Choose rock, paper, or scissors.');
    return userPlay;
}

//Declare score variables

let humanScore = 0;
let computerScore = 0;

//Function to play 1 round

function playRound() {
    console.log("Computer chooses " + computerPlay);
    console.log("Computer chooses " + userPlay);
    if (computerPlay === userPlay){
        console.log("It's a tie!");
    }   else if (userPlay == 'rock') {
        if (computerPlay == 'paper') {
            console.log("Computer wins!");
        } else {
            console.log("You win!");
        }
    }   else if (userPlay == 'paper') {
        if (computerPlay == 'rock') {
            console.log("You win!");
        } else {
            console.log("Computer wins");
        }
    }   else {
        if (computerPlay == 'rock') {
            console.log("Computer wins!");
        } else {
            console.log("You Win!");
        }
    }

}