

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

function startGame(event) {
    alert("Game started")
    playRound();
}

function checkBoxClickCallback(event){
    alert("The checkbox was clicked");
}

function startRound(){
    alert("Round");
}

function onTileClick(event){
    let clickedTileId = this.id;
    console.log(clickedTileId);
    alert(`You clicked ${clickedTileId}`);

    
    let userChoiceValue = this.getAttribute("data-value");
    let computerChoice = generateComputerChoice();
    let computerChoiceValue = computerChoice.getAttribute("data-value");

    determineRoundWinner(userChoice+computerChoice);

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


function userWins() {
alert("Win!")
}

function userLoses() {
alert("Lose!")
}

function userTies() {
alert("Tie!")
}