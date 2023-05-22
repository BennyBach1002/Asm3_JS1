
const computerPlay = () => {
    const arr = ['rock', 'paper', 'scissors'];
    const randomIndex = Math.floor(Math.random() * arr.length)
    const item = arr[randomIndex]
    return item
}
const botSelection = computerPlay()

const playRound = (playerSelection, botSelection) => {
    playerSelection = playerSelection.toLowerCase()
    if(playerSelection === botSelection){
        return 'Tie'
    }
    else if(playerSelection == 'rock'){
        if(botSelection == 'paper'){
            return 'Computer Won';
        }else{
            return 'Player Won'
        }
    }
    else if(playerSelection == 'scissors'){
        if(botSelection == 'rock'){
            return 'Computer Won';
        }else{
            return 'Player Won';
        }
    }
    else if(playerSelection == 'paper'){
        if(botSelection == 'scissors'){
            return 'Computer Won';
        }else{
            return 'Player Won';
        }
    }
    let Result = `You Lose! ${playerSelection} beat ${botSelection}`
    return Result
}

console.log();