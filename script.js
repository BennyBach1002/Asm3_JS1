
const computerPlay = () => {
    const arr = ['rock', 'paper', 'scissor'];
    const randomIndex = Math.floor(Math.random() * arr.length)
    const item = arr[randomIndex]
    return item
}
botSelection = computerPlay()

const playRound = (playerSelection = "", botSelection) => {
    playerSelection = playerSelection.toLowerCase()
    if(playerSelection === botSelection){
        return `Tie the bot also choose ${botSelection}`
    }
    else if(playerSelection === 'rock'){
        if(botSelection === 'paper'){
            return 'You lose! rock lost to paper!';
        }else{
            return 'You won! rock beat scissor!';
        }
    }
    else if(playerSelection == 'scissor'){
        if(botSelection == 'rock'){
            return `You lose! scissor lost to ${botSelection}! `;
        }else{
            return 'You won! scissor beats paper!';;
        }
    }
    else if(playerSelection == 'paper'){
        if(botSelection == 'scissor'){
            return 'You lose! paper lost to scissor!';
        }else{
            return 'You won! paper beats rock!';;
        }
    }
    return "Please choose between rock,paper,scissor"
}

const game = () => {
    for (let i = 0; i< 2; i++) {
        let eachPlayerSelection = prompt("Please choose your next move (Rock,Paper,Scissor)",  "Rock")
        let eachBotSelection = computerPlay()
        console.log(playRound(playerSelection = eachPlayerSelection, botSelection = eachBotSelection))
    }
}
