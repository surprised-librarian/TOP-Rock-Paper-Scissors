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

//Function to play 1 round

function playRound() {
    let computer = getComputerChoice();
    let user = getUserChoice();
    console.log("Computer chooses " + computer);
    console.log("Computer chooses " + user);
    if (computer === user){
        console.log("It's a tie!");
    }   else if (user == 'rock') {
        if (computer == 'paper') {
            console.log("Computer wins!");
        } else {
            console.log("You win!");
        }
    }   else if (user == 'paper') {
        if (computer == 'rock') {
            console.log("You win!");
        } else {
            console.log("Computer wins");
        }
    }   else {
        if (computer == 'rock') {
            console.log("Computer wins!");
        } else {
            console.log("You Win!");
        }
    }

}