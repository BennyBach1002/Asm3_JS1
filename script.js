// All the possible options
const choices = ["rock", "paper", "scissor"];

// Computer choices are randomly selected from the
const computerPlay = () => {
    const arr = ['rock', 'paper', 'scissor'];
    const randomIndex = Math.floor(Math.random() * arr.length)
    const item = arr[randomIndex]
    return item
}


const playRound = (playerSelection, botSelection) => {
    playerSelection = playerSelection.toLowerCase()
    botSelection = computerPlay()
    
    if(playerSelection === botSelection){
        return `Tie the bot also choose ${botSelection}`

  const randomIndex = Math.floor(Math.random() * choices.length);
  const item = choices[randomIndex];
  return item;
};

// Player choices are manually typed
const playerPlay = (message = "Please choose your next move") => {
  const input = prompt(message);
  // To make sure the player choose between rock paper scissor
  if (input === null) {
    return alert("You will be leaving the game");
  }
 // To make sure that the input is lowercase and without any spaces  
  validateInput = input.toLocaleLowerCase().trim();
  if (choices.includes(validateInput)) {
    alert(`You have chosen ${validateInput}`);
    return validateInput;
  } else {
    playerPlay(
      `${validateInput} is not one of the options please choose rock,paper or scissor`
    );
  }
};
const playRound = (playerSelection, botSelection) => {
  botSelection = computerPlay();
  playerSelection = playerPlay();
  // If both selection are the same return TIE
  if (playerSelection === botSelection) {
    return "Tie";
  }
  // Conditions for Player results
  else if (playerSelection === "rock") {
    if (botSelection === "paper") {
      return "You lose! rock lost to paper!";
    } else {
      return "You won! rock beat scissor!";
    }
  } 
  else if (playerSelection == "scissor") {
    if (botSelection == "rock") {
      return `You lose! scissor lost to rock! `;
    } else {
      return "You won! scissor beats paper!";
    }
  } 
  else if (playerSelection == "paper") {
    if (botSelection == "scissor") {
      return "You lose! paper lost to scissor!";
    } else {
      return "You won! paper beats rock!";
    }
  }
    return "Tie";
};

const game = () => {
    // Setting Initial Value for the Points
    let playerScore = 0;
    let computerScore = 0;

    // The main function where we loop through the game 5 times
    for (let i = 0; i < 5; i++) {
        console.log(`Round number ${i+1}`);
        // Because my playRound() function return a sentence, I
        // use the split and include function to look for the word
        // "win!" or "lose!" to determine the result
        const result = playRound().split(" ");
        if (result.includes("won!")) {
        playerScore++;
        console.log("You won");
        } else if (result.includes("lose!")) {
        computerScore++;
        console.log("You lost");
        } else console.log("Tie");
    }
    // This is to show the final score of the player and the computer
    console.log("player:" + playerScore);
    console.log("bot:" + computerScore);

    // The final result of who won or lose
    if (computerScore == playerScore)  {
        return "Its a Tie!"
    } else if (computerScore > playerScore) {
        return "You have lost!"
    } return "You have won!"
}
