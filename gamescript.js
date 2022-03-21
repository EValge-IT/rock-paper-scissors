let computerScore = 0;
let playerScore = 0;

function computerPlay(){
    let random = Math.floor(Math.random() * 3 + 1);
    let computerGuess;

    if (random == 1) {
        computerGuess = "rock";
    } else if (random == 2) {
        computerGuess = "paper";
    } else {
        computerGuess = "scissors";
    }
    return computerGuess;
}

function playRound(playerSelection, computerSelection){

    if (playerSelection == "rock" && computerSelection == "paper"){
        computerScore ++;
        return "You Lose!, Paper beats rock";
    } else if(playerSelection == "paper" && computerSelection == "scissors"){
        computerScore ++;
        return "You Lose! Scrissors beats paper";
    } else if(playerSelection == "scissors" && computerSelection == "rock"){
        computerScore ++;
        return "You Lose! Rock beats Scissors";
    } else if (computerSelection == "rock" && playerSelection == "paper"){
        playerScore ++;
        return "You Win!, Paper beats rock";
    } else if(computerSelection == "paper" && playerSelection == "scissors"){
        playerScore ++;
        return "You Win! Scrissors beats paper";
    } else if(computerSelection == "scissors" && playerSelection == "rock"){
        playerScore ++;
        return "You Win! Rock beats Scissors";
    } else if (computerSelection == playerSelection){
        return "Tie!";
    } else {
        return "Error Invalid Guess: " + playerSelection;
    }
    
}

function getPlayerInput(){
    let playerSelectionInput = prompt("Rock, Paper or Scissors?");
    playerSelectionInput = playerSelectionInput.toLowerCase();
    return playerSelectionInput;
}

function game(){

    while (computerScore !== 5 && playerScore !== 5) {
        console.log(playRound(getPlayerInput(), computerPlay()));
        console.log("Player Score: " + playerScore + " Computer Score: " + computerScore);
    }

    if (computerScore == 5){
        console.log("You lost to the computer!");
        document.getElementById('resetButton').style.display = "inline-block";
        document.getElementById('startButton').style.display = "none";
        document.body.style.backgroundColor = "red";
    } else if (playerScore == 5){
        console.log("You beat the computer!");
        document.getElementById('resetButton').style.display = "inline-block";
        document.getElementById('startButton').style.display = "none";
        document.body.style.backgroundColor = "green";
    }
}

function resetGame(){
    document.body.style.backgroundColor = "white";
    computerScore = 0;
    playerScore = 0;
    document.getElementById('resetButton').style.display = "none";
    document.getElementById('startButton').style.display = "inline-block";
}



