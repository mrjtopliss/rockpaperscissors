function compare(choice1, choice2) {
  console.log(choice1, choice2);
  if (choice1 === choice2) {
    alert("The result is a tie!");
    return "tie";
  }
  if (choice1 === "rock") {
    if (choice2 === "scissors") {
      alert("rock wins");
      return "player";
    } else {
      alert("paper wins");
      return "computer";
    }
  }
  if (choice1 === "paper") {
    if (choice2 === "rock") {
      alert("paper wins");
      return "player";
    } else {
      alert("scissors wins");
      return "computer";
    }
  }
  if (choice1 === "scissors") {
    if (choice2 === "rock") {
      alert("rock wins");
      return "player";
    } else {
      alert("scissors wins");
      return "computer";
    }
  }
}

function game() {
  let userChoice;
  while (
    userChoice !== "rock" &&
    userChoice !== "paper" &&
    userChoice !== "scissors"
  ) {
    userChoice = prompt("Do you choose rock, paper or scissors?").toLowerCase();
  }

  const computerOption = ["rock", "paper", "scissors"];
  const random = Math.floor(Math.random() * computerOption.length);
  const computerChoice = computerOption[random];

  console.log("Computer Choice: " + computerChoice);
  console.log("User Choice: " + userChoice);

  return compare(userChoice, computerChoice);
}

let playerScore = 0;
let computerScore = 0;

let playcount = 0;
while (playcount < 5) {
  let winner = game();
  if (winner === "player") {
    playerScore++;
  } else if (winner === "computer") {
    computerScore++;
  }
  playcount++;
}

if (playerScore > computerScore) {
  alert("You Won! The winning score was " + playerScore);
} else if (playerScore < computerScore) {
  alert("You Lost! The winning score was " + computerScore);
} else {
  alert("it was a tie! You won " + playerScore + " games");
}
