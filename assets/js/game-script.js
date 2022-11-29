document.addEventListener("DOMContentLoaded", function () {
    // Add click listener to play button.
    let playButton = document.getElementById("play-button");
    playButton.addEventListener("click", launchGame);

    // Add click listener to check button
    let checkBox = document.getElementById("difficulty-level-switch");
    checkBox.addEventListener("click", checkBoxClickCallback);

    // Add click listener to choice tiles.
    // Get the container and loop through the siblings.

    let gameTiles = document.getElementsByClassName('game-tile');

    for (let tile of gameTiles) {
        tile.addEventListener("click", onTileClick);
    }
});

const sleep = (delay) => new Promise((resolve) => setTimeout(resolve, delay))

var maxRounds = 3;
var currentRound = 0;
var boardReady = false;
var difficultGame = false;
var responseMap = createResponseMap();

function onTileClick(event) {

    if (boardReady && !difficultGame) {
        onEasyGameClick(this);
    }
}

function launchGame(event) {
    boardReady = true;
    resetGame();
    if (difficultGame) {
        console.log("Run difficult game");
    } else {
        launchEasyGameSequence();
    }

}

async function launchEasyGameSequence() {
    if (currentRound < maxRounds) {
        boardReady = true;
        currentRound++;
        console.log("Current round" + currentRound);
        document.getElementById("round-value").innerText = currentRound;
        resetImages();
        showStartRoundDialogue();

    } else {
        await (1000);
        let winner = determineGameWinner();
        alertWinner(winner);
        console.log(winner);
        boardReady = false;
    }
}

async function onEasyGameClick(clickedButton) {
    boardReady = false;
    let userChoiceValue = clickedButton.getAttribute("data-value");
    console.log(userChoiceValue);

    let computerChoice = generateComputerChoice();
    let computerChoiceValue = computerChoice.getAttribute("data-value");

    setImages(clickedButton, computerChoice);
    let choiceString = userChoiceValue + computerChoiceValue;

    await sleep(1000);

    determineRoundWinner(choiceString);

    await sleep(2000);

    launchEasyGameSequence();

}


function determineGameWinner() {
    let playerScore = parseInt(document.getElementById("player-score").innerText);
    let computerScore = parseInt(document.getElementById("computer-score").innerText);

    if (playerScore === computerScore) {
        return "The game is a tie."
    } else if (playerScore > computerScore) {
        return "You won the game!!"
    } else {
        return "Shelbot won the game."
    }
}

function generateComputerChoice() {
    let gameTiles = document.getElementsByClassName('game-tile');
    let randomIndex = Math.floor(Math.random() * 5);
    let computerChoice = gameTiles[randomIndex]
    console.log(computerChoice.getAttribute("data-value"));
    return computerChoice;
}


function determineRoundWinner(choiceString) {

    switch (choiceString) {
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
            userWins(choiceString);
            break;

        case 'rockrock':
        case 'paperpaper':
        case 'lizardlizard':
        case 'scissorsscissors':
        case 'spockspock':
            userTies();
            break;
        default:
            userLoses(choiceString);

    }
}

function setImages(userChoice, computerChoice) {
    document.getElementById("player-choice-card").setAttribute("src", userChoice.getAttribute("src"));
    document.getElementById("computer-choice-card").setAttribute("src", computerChoice.getAttribute("src"));
}
function resetImages() {
    document.getElementById("player-choice-card").setAttribute("src", "assets/images/question-player.png");
    document.getElementById("computer-choice-card").setAttribute("src", "assets/images/question-computer.png");
}

function resetGame() {
    currentRound = 1;
    boardReady = false;
    document.getElementById("computer-score").innerText = 0;
    document.getElementById("player-score").innerText = 0;
    document.getElementById("round-value").innerText = currentRound;
    resetImages();
}

function userWins(choiceString) {
   
    let statement = responseMap.get(choiceString);

    console.log("You win! " + statement);
    showDialogue("You win! " + statement);

    let playerScore = parseInt(document.getElementById("player-score").innerText);
    document.getElementById("player-score").innerText = ++playerScore;

}

function userLoses(choiceString) {
    console.log("choiceString lose: "+ choiceString);
    let statement = responseMap.get(choiceString);

    console.log("You lose. " + statement);
    showDialogue("You lose! "+ statement);
    let computerScore = parseInt(document.getElementById("computer-score").innerText);
    document.getElementById("computer-score").innerText = ++computerScore;
}

function userTies() {
    showDialogue("Tie! Neither of you won.");
}

function resetGame() {
    currentRound = 0;
    document.getElementById("computer-score").innerText = 0;
    document.getElementById("player-score").innerText = 0;
    document.getElementById("round-value").innerText = 1;
    resetImages();
}

async function alertWinner(winner) {
    await sleep(1000);
    alert(winner);
}


function createResponseMap(){
    let responseMap = new Map();

    responseMap.set('scissorspaper', 'Scissors cuts paper.');
    responseMap.set('paperscissors', 'Scissors cuts paper.');

    responseMap.set('paperrock', 'Paper covers rock.');
    responseMap.set('rockpaper', 'Paper covers rock.');

    responseMap.set('rocklizard','Rock crushes lizard.');
    responseMap.set('lizardrock','Rock crushes lizard.');

    responseMap.set('lizardspock', 'Lizard poisons Spock.');
    responseMap.set('spocklizard', 'Lizard poisons Spock.');

    responseMap.set('spockscissors', 'Spock smashes scissors');
    responseMap.set('scissorsspock', 'Spock smashes scissors');

    responseMap.set('scissorslizard', 'Scissors decapitates lizard.');
    responseMap.set('lizardscissors', 'Scissors decapitates lizard.');

    responseMap.set('lizardpaper', 'Lizard eats paper.');
    responseMap.set('paperlizard', 'Lizard eats paper.');

    responseMap.set('paperspock', 'Paper disporoves spock');
    responseMap.set('spockpaper', 'Paper disporoves spock');

    responseMap.set('spockrock', 'Spock vaporizes rock.');
    responseMap.set('rockspock', 'Spock vaporizes rock.');

    responseMap.set('rockscissors', 'Rock crushes scissors.');
    responseMap.set('scissorsrock', 'Rock crushes scissors.');
   
    return responseMap;
}


async function showDialogue(message){
    let dialogueBox = document.getElementById("dialogue-box");
    dialogueBox.style.display = "block";

    let dialogueText = document.getElementById("modal-message");
    dialogueText.innerText = message;
    await sleep(2000);
    dialogueBox.style.display = "none";

} 

async function showStartRoundDialogue(){
    let dialogueBox = document.getElementById("dialogue-box");
    dialogueBox.style.display = "block";

    let dialogueText = document.getElementById("modal-message");
    dialogueText.innerText = "Rock!";
    await sleep(400);
    dialogueText.innerText = "Paper";
    await sleep(400);
    dialogueText.innerText = "Scissors";
    await sleep(400);
    dialogueText.innerText = "Lizard";
    await sleep(400);
    dialogueText.innerText = "Spock";
    await sleep(400);

    dialogueBox.style.display = "none";

}

async function showEndGameDialogue(message){
    let dialogueBox = document.getElementById("end-game-dialogue-box");
    
    let dialogueText = document.getElementById("end-game-winner");
    dialogueText.innerText = message;

    let endGameButton = document.getElementById("end-game-button");
    let playAgainButton = document.getElementById("play-again-button");


    endGameButton.onclick = function () {
        dialogueBox.style.display = "none";
    }

    playAgainButton.onclick = function () {
        dialogueBox.style.display = "none";
        launchGame();
    }


    dialogueBox.style.display = "block";
}

function hideDialogue(component){

    component.style.display = "none";
}


function checkBoxClickCallback(event){
   console.log("checkbox clicked.");
}