
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
            return `You lose! scissor lost to rocks! `;
        }else{
            return `You won! scissor beats paper!`;
        }
    }
    else if(playerSelection == 'paper'){
        if(botSelection == 'scissor'){
            return 'You lose! paper lost to scissor!';
        }else{
            return 'You won! paper beats rock!';
        }
    }
    return "Please choose between rock,paper,scissor"
}
const playerSelection = () =>{
    return prompt("Please choose your next move (Rock,Paper,Scissor)")
}

const game = () => { 
    for (let i = 0; i< 5; i++) {
        let eachPlayerSelection = playerSelection()
        let eachBotSelection = computerPlay()
        console.log(playRound(eachPlayerSelection, eachBotSelection))
    }
}

const calculate = () => {
    let botScore = 0;    
    let playerScore = 0; 
    let op = `You won ! scissor beats paper!`
    let po = `You lost ! scissor beats paper!`
    let arr = op.split(" ")
    for (let i = 0; i< op.length; i++) {
        let eachWord = arr[i]
        console.log(eachWord);
        if (eachWord === "won"){
            playerScore++;
        } else {
            botScore++;
        }
        
    }
    console.log(playerScore);
}