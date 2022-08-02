const choices = ["rock", "paper", "scissors"];
const wins = { rock: "scissors", paper: "rock", scissors: "paper" };
let computerSelection;
let playerSelection;
let computerScore = 0;
let playerScore = 0;

let getComputerChoice = () => choices[~~(Math.random() * choices.length)];

function playRound(playerSelection, computerSelection) {
  computerSelection = computerSelection.toLowerCase();
  playerSelection = playerSelection.toLowerCase();
  if (computerSelection === playerSelection) {
    return "It's a Tie";
  } else if (computerSelection === wins[playerSelection]) {
    playerScore++;
    return "Player Wins";
  } else {
    computerScore++;
    return "Computer Wins";
  }
}

function declareWinner(playerScore, computerScore) {
  if (playerScore === computerScore) {
    return "It's a Draw!";
  } else if (playerScore > computerScore) {
    return "You Won!";
  } else {
    return "You Lost!";
  }
}

function game(numRounds) {
  for (let i = 1; i <= numRounds; i++) {
    playerSelection = prompt("Enter your choice: ");
    computerSelection = getComputerChoice();
    console.log(`Player chooses ${playerSelection}`);
    console.log(`Computer chooses ${computerSelection}`);
    playRound(playerSelection, computerSelection);
    console.log(`Computer: ${computerScore} Player: ${playerScore}`);
  }
  console.log(declareWinner(playerScore, computerScore));
}

game(5);
