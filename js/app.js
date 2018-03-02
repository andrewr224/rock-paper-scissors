const info     = document.querySelector("p.info");
const congrats = document.querySelector("h2");
const score    = document.querySelector("p.score");
const rock     = document.querySelector(".rock");
const paper    = document.querySelector(".paper");
const scissors = document.querySelector(".scissors");
const reset    = document.querySelector(".reset");
const contr    = document.querySelector(".button-group");

let userScore = 0;
let botScore  = 0;

rock.addEventListener("click", () => { playRound("Rock"); });
paper.addEventListener("click", () => { playRound("Paper"); });
scissors.addEventListener("click", () => { playRound("Scissors"); });
reset.addEventListener("click", () => { newGame(); });

function botPick() {
  let options = ["Rock", "Paper", "Scissors"];
  let num     = Math.floor(Math.random() * 3);

  return options[num];
}

function playRound(user, bot = botPick()) {
  switch (beats(user, bot)) {
  case "draw":
    print(`It's a draw. You both picked ${bot}`, info);
    print(`User - ${userScore} | Bot - ${botScore}`, score);
    break;
  case true:
    userScore++;
    print(`Yeah! You won! ${user} beats ${bot}`, info);
    print(`User - ${userScore} | Bot - ${botScore}`, score);
    break;
  default:
    botScore++;
    print(`You've lost! ${bot} beats ${user}`, info);
    print(`User - ${userScore} | Bot - ${botScore}`, score);
  }

  if (gameOver()) { resetScore(); };
}

function beats(pick1, pick2) {
  if (pick1 == pick2) {
    return "draw";
  } else if ((pick1 == "Rock") && (pick2 == "Scissors")) {
    return true;
  } else if ((pick1 == "Paper") && (pick2 == "Rock")) {
    return true;
  } else if ((pick1 == "Scissors") && (pick2 == "Rock")) {
    return true;
  } else {
    return false;
  }
}

function gameOver() {
  if ((userScore >= 5) || (botScore >= 5)) {
    print(userScore > botScore ? "You won the game!" : "You've lost the game!", congrats);
    contr.classList.toggle("hidden");
    reset.classList.toggle("hidden");
    return true;
  }
}

function newGame() {
  resetScore();
  print(`User - ${userScore} | Bot - ${botScore}`, score);
  print("Win 5 rounds to win the game!", congrats);
  contr.classList.toggle("hidden");
  reset.classList.toggle("hidden");
}

function resetScore() {
  botScore  = 0;
  userScore = 0;
}

function print(msg, area = info) {
  area.textContent = msg;
}

