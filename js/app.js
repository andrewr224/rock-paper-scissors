function game() {
  let options   = ["Rock", "Paper", "Scissors"];
  let userScore = 0;
  let botScore  = 0;

  function botPick() {
    let num = Math.floor(Math.random() * 3);

    return options[num];
  }

  function userPick() {
    let pick = normalize(window.prompt("Choose: Rock, Paper, or Scissors?"));

    while (!options.includes(pick)) {
      pick = normalize(window.prompt("You can only choose among Rock, Paper, and Scissors?"));
    }

   return pick;
  }

  function playRound(user, bot) {
    switch (beats(user, bot)) {
      case "draw":
        return "It'a draw";
        break;
      case true:
        userScore++;
        return `Yeah! You won! ${user} beats ${bot}`;
        break;
      default:
        botScore++;
        return `You've lost! ${bot} beats ${user}`;
    }
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
    }
  }

  function normalize(string) {
    return string.charAt(0).toUpperCase() + string.slice(1).toLowerCase();
  }

  while ((userScore < 5) && (botScore < 5)) {
    console.log(playRound(userPick(), botPick()));
  }

  return userScore > botScore ? "You won the game!" : "You've lost the game!";
}
