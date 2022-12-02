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

        tile.addEventListener("mouseover", onImageTileMouseOver);
        tile.addEventListener("mouseout", onImageTileMouseOut);
    }

    //Set the event listeners for the settings icon and accept settings icon.

    let sideMenu = document.getElementById("side-menu");
    let settingsIcon = document.getElementById("settings-icon");
    let acceptSettingsIcon = document.getElementById("accept-settings-icon");

    settingsIcon.addEventListener("click", function () {
        sideMenu.style.width = "300px";
    });

    acceptSettingsIcon.addEventListener("click", function () {
        sideMenu.style.width = "0px";
    });

    // Set the onchange listener for the rounds slider

    let slider = document.getElementById("rounds-slider");
    slider.addEventListener("change", onSliderChange);

    // Set the value in the settings menue
    let roundSettingValue = document.getElementById("round-setting-value");
    roundSettingValue.innerText = slider.value;


    //Set the onchange listener for the round timing slider
    let timingSlider = document.getElementById("timing-slider");
    timingSlider.addEventListener("change", onTimingSliderChange);
});

const sleep = (delay) => new Promise((resolve) => setTimeout(resolve, delay))

var maxRounds = getSliderValue();
var currentRound = 0;
var boardReady = false;
var difficultGame = false;
var responseMap = createResponseMap();
var userChoiceDifficultGame = null;
var computerChoiceDifficultGame = null;


var roundInterval = 2000;

function onTileClick(event) {

    if (boardReady && !difficultGame) {
        onEasyGameClick(this);
    } else if (difficultGame && boardReady) {
        setUserChoiceDifficultGame(this);
        document.getElementById("player-choice-card").setAttribute("src", userChoiceDifficultGame.getAttribute("src"));

    }
}


async function launchDifficultGameSequence() {
    currentRound = 1;

    for (let i = 0; i < maxRounds; i++) {
        await difficultRoundInitialize();
        console.log(roundInterval);
        await sleep(roundInterval); //Change this value to manipulate how much time the user has to make a choice.
        await difficultRoundEvaluate();
        await sleep(2000);
        await isGameOver();
        await sleep(250);
    }

}

async function difficultRoundInitialize() {
    resetUserImage();
    boardReady = true;
    document.getElementById("round-value").innerText = currentRound;
    currentRound++;
    computerChoiceDifficultGame = generateComputerChoice();
    document.getElementById("computer-choice-card").setAttribute("src", computerChoiceDifficultGame.getAttribute("src"));
    shuffleTiles();

}

async function difficultRoundEvaluate() {

    if (userChoiceDifficultGame == null) {
        userLoses(null);
    } else {
        let userChoiceValue = userChoiceDifficultGame.getAttribute("data-value");
        let computerChoiceValue = computerChoiceDifficultGame.getAttribute("data-value");
        determineRoundWinner(userChoiceValue + computerChoiceValue);
    }

}

async function isGameOver() {

    if (currentRound > maxRounds) {
        let winner = determineGameWinner();
        showEndGameDialogue(winner);
    }

}

function setUserChoiceDifficultGame(clickedTile) {
    userChoiceDifficultGame = clickedTile;
}

function launchGame(event) {
    closeMenu();
    boardReady = true;
    resetGame();
    if (difficultGame) {
        launchDifficultGameSequence();
    } else {
        launchEasyGameSequence();
    }

}

async function launchEasyGameSequence() {
    if (currentRound < maxRounds) {
        boardReady = true;
        currentRound++;
        document.getElementById("round-value").innerText = currentRound;
        resetImages();
        showStartRoundDialogue();

    } else {

        let winner = determineGameWinner();
        alertWinner(winner);
        boardReady = false;
    }
}

async function onEasyGameClick(clickedButton) {
    boardReady = false;
    let userChoiceValue = clickedButton.getAttribute("data-value");

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

function resetUserImage(){
    document.getElementById("player-choice-card").setAttribute("src", "assets/images/question-player.png");
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
    showDialogue("You win! " + statement);

    let playerScore = parseInt(document.getElementById("player-score").innerText);
    document.getElementById("player-score").innerText = ++playerScore;

}

function userLoses(choiceString) {

    let statement = "";
    //TODO add null check for choice string.
    if (choiceString === null || choiceString === 'undefined') {
        statement = "You're too slow!";
    } else {
        statement = responseMap.get(choiceString);
    }

    showDialogue("You lose! " + statement);
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
    showEndGameDialogue(winner);
}


function createResponseMap() {
    let responseMap = new Map();

    responseMap.set('scissorspaper', 'Scissors cuts paper.');
    responseMap.set('paperscissors', 'Scissors cuts paper.');

    responseMap.set('paperrock', 'Paper covers rock.');
    responseMap.set('rockpaper', 'Paper covers rock.');

    responseMap.set('rocklizard', 'Rock crushes lizard.');
    responseMap.set('lizardrock', 'Rock crushes lizard.');

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


async function showDialogue(message) {
    let dialogueBox = document.getElementById("dialogue-box");
    dialogueBox.style.display = "block";

    let dialogueText = document.getElementById("modal-message");
    dialogueText.innerText = message;
    await sleep(2000);
    dialogueBox.style.display = "none";

}

async function showStartRoundDialogue() {
    let dialogueBox = document.getElementById("dialogue-box");
    dialogueBox.style.display = "block";

    let dialogueText = document.getElementById("modal-message");
    dialogueText.innerText = "Rock!";
    await sleep(400);
    dialogueText.innerText = "Paper!";
    await sleep(400);
    dialogueText.innerText = "Scissors!";
    await sleep(400);
    dialogueText.innerText = "Lizard!";
    await sleep(400);
    dialogueText.innerText = "Spock!";
    await sleep(400);

    dialogueBox.style.display = "none";

}

async function showEndGameDialogue(message) {
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

function hideDialogue(component) {

    component.style.display = "none";
}


function checkBoxClickCallback(event) {
    difficultGame = this.checked;
}

function shuffleTiles() {

    let tilePanelArray = document.getElementsByTagName("game-tile-panel");
    let tilePanel = tilePanelArray[0];

    let newTileArray = [];

    let tiles = tilePanel.children;
    for (let i = 0; i < tiles.length; i++) {
        newTileArray.push(tiles[i]);

    }

    newTileArray = shuffle(newTileArray);

    tilePanel.innerHTML = "";

    for (let tile of newTileArray) {
        tilePanel.appendChild(tile);
    }


}


function shuffle(array) {
    let currentIndex = array.length, randomIndex;

    // While there remain elements to shuffle.
    while (currentIndex != 0) {

        // Pick a remaining element.
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex--;

        // And swap it with the current element.
        [array[currentIndex], array[randomIndex]] = [
            array[randomIndex], array[currentIndex]];
    }

    return array;
}

function onImageTileMouseOver(event) {

    if (boardReady) {
        this.style.transition = "0.2s";
        this.style.borderRadius = "15px"
        this.style.border = "4px solid red";

    }

}

function onImageTileMouseOut(event) {
    this.style.border = "none";
    this.style.transition = "0.1s";
}

function closeMenu() {
    let sideMenu = document.getElementById("side-menu");
    sideMenu.style.width = "0px";
}

function openMenu() {
    let sideMenu = document.getElementById("side-menu");
    sideMenu.style.width = "300px";
}

function onSliderChange(event) {
    let rounds = this.value;

    let roundSettingValue = document.getElementById("round-setting-value");
    roundSettingValue.innerText = rounds;
    maxRounds = rounds;
}

function getSliderValue() {
    let slider = document.getElementById("rounds-slider");
    return slider.value;

}

function onTimingSliderChange(event){
    let newValue = parseInt(this.value);
    console.log(newValue);

    switch(newValue) {
        case 1: 
            roundInterval = 3500;
            break;
        case 2:
            roundInterval = 2000;
            break;
        case 3:
            roundInterval =  1500;
            break;
        default: 
            roundInterval = 2000;
    }

}

function getTimingSliderValue(){
    let slider = document.getElementById("timing-slider");
    return slider.value;
}