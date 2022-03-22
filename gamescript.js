// used to track computer and player scores throughout the game.
let computerScore = 0;
let playerScore = 0;

// randomly generate a number and link it to either rock, paper or scissors
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

// play a round of rock, paper, scissors. The logic to calculate winning hand is done within this function
function playRound(playerSelection, computerSelection){
    var scoreUpdate = document.getElementById('scoreCounter');
    var list = document.getElementById('log');
    var entry = document.createElement('li');
    var logEntry;
    if (playerSelection == "rock" && computerSelection == "paper"){
        computerScore ++;
        logEntry = "You Lose! Paper beats rock";
    } else if(playerSelection == "paper" && computerSelection == "scissors"){
        computerScore ++;
        logEntry = "You Lose! Scrissors beats paper";
    } else if(playerSelection == "scissors" && computerSelection == "rock"){
        computerScore ++;
        logEntry = "You Lose! Rock beats Scissors";
    } else if (computerSelection == "rock" && playerSelection == "paper"){
        playerScore ++;
        logEntry = "You Win!, Paper beats rock";
    } else if(computerSelection == "paper" && playerSelection == "scissors"){
        playerScore ++;
        logEntry = "You Win! Scrissors beats paper";
    } else if(computerSelection == "scissors" && playerSelection == "rock"){
        playerScore ++;
        logEntry = "You Win! Rock beats Scissors";
    } else if (computerSelection == playerSelection){
        logEntry = "Tie!";
    } else {
        logEntry = "Error Invalid Guess: " + playerSelection;
    }
    entry.appendChild(document.createTextNode(logEntry));
    list.appendChild(entry);
    scoreUpdate.innerHTML = "Player: " + playerScore + " Computer: " + computerScore;

    if (playerScore == 5) {
        scoreUpdate.innerHTML = "You won!";
        scoreUpdate.style.color = "green";
        document.getElementById('rockPlay').style.display = "none";
        document.getElementById('paperPlay').style.display = "none";
        document.getElementById('scissorsPlay').style.display = "none";
        document.getElementById('selectionText').style.display = "none";
    } else if (computerScore == 5){
        scoreUpdate.innerHTML = "The computer has won ;(";
        scoreUpdate.style.color = "red";
        document.getElementById('rockPlay').style.display = "none";
        document.getElementById('paperPlay').style.display = "none";
        document.getElementById('scissorsPlay').style.display = "none";
        document.getElementById('selectionText').style.display = "none";
    }

}

function playerSelection(input){
    playRound(input, computerPlay());
}





