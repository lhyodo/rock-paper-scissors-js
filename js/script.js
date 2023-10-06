function getPlayerChoice() {
  let choice = prompt("Enter rock, paper, or scissors: ");

  while (choice != "rock" && choice != "paper" && choice != "scissors") {
    choice = prompt("Invalid input. Enter rock, paper, or scissors: ");
  }
  return choice;
}
function getComputerChoice() {
  let temp = Math.floor(Math.random() * 3);
  if (temp == 1) {
    return "rock";
  }
  if (temp == 2) {
    return "paper";
  }
  if (temp == 3) {
    return "scissors";
  }
  return "scissors";
}

function playRound(player_choice, comp_choice) {
  
  if (player_choice == comp_choice) {
    return "tie.";
  }
  if (player_choice == "rock") {
    if (comp_choice == "paper") {
      return "you lose! paper beats rock";
    }
    if (comp_choice == "scissors") {
      return "you win! rock beats scissors";
    }
  }
  if (player_choice == "paper") {
    if (comp_choice == "scissors") {
      return "you lose! scissors beats paper";
    }
    if (comp_choice == "rock") {
      return "you win! paper beats rock";
    }
  }
  if (player_choice == "scissors") {
    if (comp_choice == "paper") {
      return "you win! scissors beats paper";
    }
    if (comp_choice == "rock") {
      return "you lose! rock beats scissors";
    }
  }
}

function game() {
  console.log("game begin!");
  let win_count = 0;
  let lose_count = 0;
  for (let i = 0; i < 5; ++i) {
    
    let player_choice = getPlayerChoice();
    let computer_choice = getComputerChoice();
    let msg = playRound(player_choice, computer_choice);
    if (msg.includes("win")) {
      ++win_count;
    }
    if (msg.includes("lose")) {
      ++lose_count;
    }
    console.log(msg);
  }

  console.log("final score: ", win_count, " to ", lose_count);
}
game();