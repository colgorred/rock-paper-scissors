const choices = ["rock", "paper", "scissors"];
const wins = { rock: "scissors", paper: "rock", scissors: "paper" };

let getComputerChoice = () => choices[~~(Math.random() * choices.length)];

function playRound(playerSelection, computerSelection) {
  computerSelection = computerSelection.toLowerCase();
  playerSelection = playerSelection.toLowerCase();
  if (computerSelection === playerSelection) {
    return "Tie";
  } else if (computerSelection === wins[playerSelection]) {
    return "Player Wins";
  } else {
    return "Computer Wins";
  }
}
