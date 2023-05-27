
const computerPlay = () => {
    const arr = ['rock', 'paper', 'scissor'];
    const randomIndex = Math.floor(Math.random() * arr.length)
    const item = arr[randomIndex]
    return item
}

const playRound = (playerSelection, botSelection) => {
    botSelection = computerPlay()
    playerSelection = playerSelection.toLowerCase()
    if(playerSelection === botSelection){
        return 'Tie'
    }
    // else if(playerSelection == 'rock'){
    //     return `rock vs ${botSelection}`
    // }
    // else if(playerSelection == 'paper'){
    //     return `paper vs ${botSelection}`
    // }
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
    let Result = `You Lose! ${playerSelection} beat ${botSelection}`
    return Result
}
