

document.addEventListener("DOMContentLoaded", function(){
    // Add click listener to play button.
    let playButton = document.getElementById("play-button");
    playButton.addEventListener("click", startGame);

    // Add click listener to check button
    let checkBox = document.getElementById("difficulty-level-switch");
    checkBox.addEventListener("click", checkBoxClickCallback);

    // Add click listener to choice tiles.
    // Get the container and loop through the siblings.

    let gameTiles = document.getElementsByClassName('game-tile');
    
    for(let tile of gameTiles){
        tile.addEventListener("click", onTileClick);
    }
});

var maxRounds = 3;
var currentRound = 0;
function startGame(event) {
        if(currentRound < maxRounds){
        alert("Rock, Paper, Scissors, Lizard Spock!");
        currentRound++;
    } else {
        // Determine the game winner.
        // Reset the entire game.
        alert("Game over");
    }
}

function checkBoxClickCallback(event){
    alert("The checkbox was clicked");
}


function onTileClick(event){
    let clickedTileId = this.id;
    console.log(clickedTileId);
    
    let userChoiceValue = this.getAttribute("data-value");
    let computerChoice = generateComputerChoice();
    let computerChoiceValue = computerChoice.getAttribute("data-value");

    setImage(this, computerChoice);
    wait(500);

    console.log(userChoiceValue+computerChoiceValue);
    determineRoundWinner(userChoiceValue+computerChoiceValue);
    wait(1500);
    resetImages();
    startGame();

}

function resetImages(){
    document.getElementById("player-choice-card").setAttribute("src", "assets/images/question.png");
    document.getElementById("computer-choice-card").setAttribute("src", "assets/images/question.png");
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

function setImage(userChoice, computerChoice) {
    document.getElementById("player-choice-card").setAttribute("src", userChoice.getAttribute("src"));
    document.getElementById("computer-choice-card").setAttribute("src", computerChoice.getAttribute("src"));
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