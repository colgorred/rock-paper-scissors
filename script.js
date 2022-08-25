const choices = document.querySelectorAll(".choice");
const score = document.getElementById("score");
const notification = document.getElementById("notification");
const compChoices = ["rock", "paper", "scissors"];
const winCriteria = { rock: "scissors", paper: "rock", scissors: "paper" };
const WIN_SCORE = 5;
let computerSelection;
let playerSelection;
let computerScore = 0;
let playerScore = 0;

//Event listeners
choices.forEach((choice) => choice.addEventListener("click", playRound));

const getComputerChoice = () => compChoices[~~(Math.random() * choices.length)];

function playRound(e) {
  if (playerScore < WIN_SCORE && computerScore < WIN_SCORE) {
    playerSelection = e.target.id;
    computerSelection = getComputerChoice();
    if (computerSelection === playerSelection) {
      notification.textContent = `Computer chose ${computerSelection} - It's a tie`;
    } else if (computerSelection === winCriteria[playerSelection]) {
      playerScore++;
      drawScoreboard();
      checkPlayerWin();
    } else {
      computerScore++;
      drawScoreboard();
      checkComputerWin();
    }
  }
}

function checkPlayerWin() {
  if (playerScore === WIN_SCORE) {
    notification.textContent = `You made it to ${WIN_SCORE}pts, you win!`;
  } else {
    notification.textContent = `Computer chose ${computerSelection} - Player Wins`;
  }
}

function checkComputerWin() {
  if (computerScore === WIN_SCORE) {
    notification.textContent = `Computer made it to ${WIN_SCORE}pts, you lose!`;
  } else {
    notification.textContent = `Computer chose ${computerSelection} - Computer Wins`;
  }
}

function drawScoreboard() {
  score.innerHTML = `
  <p>Player: ${playerScore}</p>
  <p>Computer: ${computerScore}</p>
  `;
}
