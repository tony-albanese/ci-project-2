

document.addEventListener("DOMContentLoaded", function(){
    // Add click listener to play button.
    let playButton = document.getElementById("play-button");
    playButton.addEventListener("click", launchGame);

    // Add click listener to check button
    let checkBox = document.getElementById("difficulty-level-switch");
    // checkBox.addEventListener("click", checkBoxClickCallback);

    // Add click listener to choice tiles.
    // Get the container and loop through the siblings.

    let gameTiles = document.getElementsByClassName('game-tile');
    
    for(let tile of gameTiles){
        tile.addEventListener("click", onTileClick);
    }
});

const sleep = (delay) => new Promise((resolve) => setTimeout(resolve, delay))

var maxRounds = 3;
var currentRound = 0;
var boardReady = false;
var difficultGame = false;

function onTileClick(event){
  
    if(boardReady && !difficultGame){
        onEasyGameClick(this);
    }
}

function launchGame(event) {
    boardReady = true;
    resetGame();
    if(difficultGame) {
        console.log("Run difficult game");
    } else {
        launchEasyGameSequence();
    }

}

async function launchEasyGameSequence(){
    if(currentRound < maxRounds){
        boardReady = true;
        currentRound++;
        console.log("Current round" + currentRound);
        document.getElementById("round-value").innerText = currentRound;
        resetImages();

    } else {await(1000);
       let winner = determineGameWinner();
      alertWinner(winner);
        console.log(winner);
       boardReady = false;
    }
}

async function onEasyGameClick(clickedButton){
    boardReady = false;
    let userChoiceValue = clickedButton.getAttribute("data-value");
    console.log(userChoiceValue);

    let computerChoice = generateComputerChoice();
    let computerChoiceValue = computerChoice.getAttribute("data-value");

    setImages(clickedButton, computerChoice);
    let choiceString = userChoiceValue + computerChoiceValue;

    await sleep(1000);

    determineRoundWinner(choiceString);

    launchEasyGameSequence();
    
}


function determineGameWinner(){
    let playerScore =  parseInt(document.getElementById("player-score").innerText);
    let computerScore = parseInt(document.getElementById("computer-score").innerText);

    if(playerScore===computerScore) {
        return "The game is a tie."
    } else if (playerScore >computerScore) {
        return "You won the game!!"
    } else {
        return "Shelbot won the game."
    }
}

function generateComputerChoice(){
    let gameTiles = document.getElementsByClassName('game-tile');
    let randomIndex = Math.floor(Math.random()*5);
    let computerChoice = gameTiles[randomIndex]
    console.log(computerChoice.getAttribute("data-value"));
    return computerChoice;
}


function determineRoundWinner(choiceString){

    switch(choiceString){
        case 'scissorspaper':
        case 'paperrock':
        case 'rocklizard':
        case 'lizardspock':
        case 'spockscissors':
        case 'scissorslizard':
        case 'lizardpaper':
        case 'paperspock':
        case 'spockrock':
        case 'rockscissors':
            userWins();
            break;

        case 'rockrock':
        case 'paperpaper':
        case 'lizardlizard':
        case 'scissorsscissors':
        case 'spockspock':
            userTies();
            break;
        default:
            userLoses();

    }
}

function setImages(userChoice, computerChoice) {
    document.getElementById("player-choice-card").setAttribute("src", userChoice.getAttribute("src"));
    document.getElementById("computer-choice-card").setAttribute("src", computerChoice.getAttribute("src"));
}
function resetImages(){
    document.getElementById("player-choice-card").setAttribute("src", "assets/images/question-player.png");
    document.getElementById("computer-choice-card").setAttribute("src", "assets/images/question-computer.png");
}

function resetGame(){
    currentRound = 1;
    boardReady = false;
    document.getElementById("computer-score").innerText = 0;
    document.getElementById("player-score").innerText = 0;
    document.getElementById("round-value").innerText = currentRound;
    resetImages();
}

function userWins() {
    console.log("Win!");
    alert("You win!");
    let playerScore = parseInt( document.getElementById("player-score").innerText);
    document.getElementById("player-score").innerText = ++playerScore;
    
    }
    
    function userLoses() {
    alert("You lose!")
    console.log("Lose!");
    let computerScore = parseInt(document.getElementById("computer-score").innerText);
    document.getElementById("computer-score").innerText = ++computerScore;
    }
    
    function userTies() {
    alert("Tie!")
    console.log("Tie");
    }

    function resetGame(){
        currentRound = 0;
        document.getElementById("computer-score").innerText = 0;
        document.getElementById("player-score").innerText = 0;
        document.getElementById("round-value").innerText = 1;
        resetImages();
    }

async function alertWinner(winner){
    await sleep(1000);
    alert(winner);
}
