

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

let userChoice;

let humanScore = 0;
let computerScore = 0;

let resultsStatement = document.querySelector('#resultsStatement');
let humanScoreDisplay = document.querySelector('#humanScore');
let computerScoreDisplay = document.querySelector('#computerScore');

let resultsContainer = document.querySelector('#resultsContainer');

let btnRock = document.querySelector('#rock');
function btnRockPush() {
    userChoice = 'rock';
    playGame(userChoice);
}
btnRock.addEventListener('click', btnRockPush);

let btnPaper = document.querySelector('#paper');
function btnPaperPush() {
    userChoice = 'paper';
    playGame(userChoice);
}
btnPaper.addEventListener('click', btnPaperPush);

let btnScissors = document.querySelector('#scissors');
function btnScissorsPush() {
    userChoice = 'scissors';
    playGame(userChoice);
}
btnScissors.addEventListener('click', btnScissorsPush);

function playAgain() {
    btnRock.removeEventListener('click', btnRockPush);
    btnPaper.removeEventListener('click', btnPaperPush);
    btnScissors.removeEventListener('click', btnScissorsPush);
    let playAgainbtn = document.createElement('button');
    playAgainbtn.textContent = 'Play Again?';
    playAgainbtn.style.backgroundColor = 'black';
    playAgainbtn.style.color = 'white';
    playAgainbtn.style.fontSize = '4rem';
    playAgainbtn.style.borderRadius = '1rem';
    playAgainbtn.style.padding = "0 2rem";
    playAgainbtn.style.marginTop = "1rem";
    resultsStatementContainer.appendChild(playAgainbtn);
    
    playAgainbtn.addEventListener('click', () => {
        humanScore = 0;
        computerScore = 0;
        computerScoreDisplay.textContent = computerScore;
        humanScoreDisplay.textContent = humanScore;
        resultsStatementContainer.removeChild(playAgainbtn);
        resultsStatement.textContent = '';
        btnRock.addEventListener('click', btnRockPush);
        btnPaper.addEventListener('click', btnPaperPush);
        btnScissors.addEventListener('click', btnScissorsPush);
    })
}

//Function to play 1 round

function computerWinsRound() {
    resultsStatement.textContent = 'Computer wins!';
    computerScoreDisplay.textContent = computerScore;
}

function computerWinsGame() {
    resultsStatement.textContent = 'Computer wins the Game!';
    computerScoreDisplay.textContent = computerScore;
    playAgain();
}

function humanWinsRound() {
    resultsStatement.textContent = 'You win!';
    humanScoreDisplay.textContent = humanScore;
}

function humanWinsGame() {
    resultsStatement.textContent = 'You win the Game!';
    humanScoreDisplay.textContent = humanScore;
    playAgain();
}

function playGame(userChoice) {
    const userPlay = userChoice;
    getComputerChoice();
    console.log("Computer chooses " + computerPlay);
    console.log("User chooses " + userPlay);

        if (computerPlay === userPlay){
            resultsStatement.textContent = 'It is a tie'
        }   else if (userPlay == 'rock') {
            if (computerPlay == 'paper') {
                computerScore++;
                if (computerScore === 5) {
                    computerWinsGame();
                } else {
                    computerWinsRound();
                }     
            } else {
                humanScore++;
                if (humanScore === 5) {
                    humanWinsGame();
                } else {
                    humanWinsRound();
                }
            }
        }   else if (userPlay == 'paper') {
            if (computerPlay == 'rock') {
                humanScore++;
                if (humanScore === 5) {
                    humanWinsGame();
                } else {
                    humanWinsRound();
                }
            } else {
                computerScore++;
                if (computerScore === 5) {
                    computerWinsGame();
                } else {
                    computerWinsRound();
                }
            }
        }   else {
            if (computerPlay == 'rock') {
                computerScore++;
                if (computerScore === 5) {
                    computerWinsGame();
                } else {
                    computerWinsRound();
                }
            } else {
                humanScore++;
                if (humanScore === 5) {
                    humanWinsGame();
                } else {
                    humanWinsRound();
                }
            }
        }
}




