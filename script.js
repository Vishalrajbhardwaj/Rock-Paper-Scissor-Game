let scores = JSON.parse(localStorage.getItem("scores")) || {
  wins: 0,
  losses: 0,
  ties: 0,
};

// update score function
function updateScores() {
  document.querySelector(".js-result").innerHTML = "";
  document.querySelector(".js-moves").innerHTML = "";
  document.querySelector(
    ".js-scores"
  ).innerHTML = `You Wins: ${scores.wins}, Loss:  ${scores.losses}, Tie:  ${scores.ties}`;
}
updateScores();
function playGames(playerMove) {
  let result = "";
  let computerMove = computerMoves();

  if (playerMove === "rock") {
    if (computerMove === "rock") {
      result = "Tie";
    } else if (computerMove === "paper") {
      result = "Loss";
    } else if (computerMove === "scissor") {
      result = "Win";
    }
  } else if (playerMove === "paper") {
    if (computerMove === "rock") {
      result = "Win";
    } else if (computerMove === "paper") {
      result = "Tie";
    } else if (computerMove === "scissor") {
      result = "Loss";
    }
  } else if (playerMove === "scissor") {
    if (computerMove === "rock") {
      result = "Loss";
    } else if (computerMove === "paper") {
      result = "Win";
    } else if (computerMove === "scissor") {
      result = "Tie";
    }
  }

  // set the scores
  if (result === "Win") {
    scores.wins += 1;
  } else if (result === "Loss") {
    scores.losses += 1;
  } else if (result === "Tie") {
    scores.ties += 1;
  }
  updateScores();
  localStorage.setItem("scores", JSON.stringify(scores));

  // showing the ui result and moves
  document.querySelector(".js-result").innerHTML = `You ${result}`;
  document.querySelector(
    ".js-moves"
  ).innerHTML = `You - ${playerMove} | Computer - ${computerMove}`;
}

// function for computerMoves

function computerMoves() {
  let computerMove;
  let randomNum = Math.random();
  if (randomNum > 0 && randomNum < 1 / 3) {
    computerMove = "rock";
  } else if (randomNum > 1 / 3 && randomNum < 2 / 3) {
    computerMove = "paper";
  } else if (randomNum > 2 / 3 && randomNum < 1) {
    computerMove = "scissor";
  }

  return computerMove;
}

