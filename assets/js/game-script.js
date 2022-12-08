document.addEventListener("DOMContentLoaded", function () {
    // Add click listener to play button.
    let playButton = document.getElementById("play-button");
    playButton.addEventListener("click", launchGame);

    //Add click listener to home button.
    let homeButton = document.getElementById("home-button");
    homeButton.addEventListener("click", function () {
        window.open("index.html", "_self").focus();
    });

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

/**
 * @param {*} delay 
 * @returns Promise
 * This sleep method is used to pause the program execution for a certain amount of time.
 */
const sleep = (delay) => new Promise((resolve) => setTimeout(resolve, delay))

/**
 * These are the global variables needed.
 */
var maxRounds = getSliderValue();
var currentRound = 0;
var boardReady = false;
var difficultGame = false;
var responseMap = createResponseMap();
var userChoiceDifficultGame = null;
var computerChoiceDifficultGame = null;

//Default round interval
var roundInterval = 2000;

/**
 * 
 * @param {*} event 
 * Method to process a tile click when the user clicks on an image. The method checks if the board is ready for clicks and whether a difficult game is set.
 * The procedure to handle clicks is different in a difficult game.
 */
function onTileClick(event) {
    if (boardReady && !difficultGame) {
        onEasyGameClick(this);
    } else if (difficultGame && boardReady) {
        setUserChoiceDifficultGame(this);
        document.getElementById("player-choice-card").setAttribute("src", userChoiceDifficultGame.getAttribute("src"));
    }
}

/**
 * Sequence for a difficult game round. The method loops for the number of rounds selected by the user.
 */
async function launchDifficultGameSequence() {
    currentRound = 1;
    for (let i = 0; i < maxRounds; i++) {
        await difficultRoundInitialize();
        await sleep(roundInterval); //Change this value to manipulate how much time the user has to make a choice.
        await difficultRoundEvaluate();
        await sleep(2000);
        await isGameOver();
        await sleep(250);
    }
}

/**
 * This method initializes the board for a difficult round. The user choice is reset, the images are reset, the round counter is incremented,
 * and the computer makes a new choice, and the tiles are finally shuffled.
 */
async function difficultRoundInitialize() {
    userChoiceDifficultGame = null;
    resetUserImage();
    boardReady = true;
    document.getElementById("round-value").innerText = currentRound;
    currentRound++;
    computerChoiceDifficultGame = generateComputerChoice();
    document.getElementById("computer-choice-card").setAttribute("src", computerChoiceDifficultGame.getAttribute("src"));
    shuffleTiles();
}

/**
 * method to determine the winner of an indiviudal round in a difficult game.
 * If the user has made no choice (null), they lose automatically.
 */
async function difficultRoundEvaluate() {

    if (userChoiceDifficultGame == null) {
        userLoses(null);
    } else {
        let userChoiceValue = userChoiceDifficultGame.getAttribute("data-value");
        let computerChoiceValue = computerChoiceDifficultGame.getAttribute("data-value");
        determineRoundWinner(userChoiceValue + computerChoiceValue);
    }
}

/**
 * Method determines if the game is over by comparing the current round to the max round value
 * set by the user.
 */
async function isGameOver() {
    if (currentRound > maxRounds) {
        let winner = determineGameWinner();
        showEndGameDialogue(winner);
    }
}

/**
 * 
 * @param {*} clickedTile 
 */
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

/**
 * This is the sequence of events to launch an easy game (the default). The method checks if there are 
 * rounds left to play and if so, the board is freed, the round incremented, the choices reset, and the 
 * dialog prompting the user to make a choice is shown. Otherwise, the winner is determined
 * and the user alerted.
 */
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

/**
 * 
 * @param {*} clickedButton
 * Method to process click during an easy game. The computers choice is made and displayed.
 * The users choice is displayed. The winner is then determined and a new sequence is started. 
 */
async function onEasyGameClick(clickedButton) {
    boardReady = false;
    let userChoiceValue = clickedButton.getAttribute("data-value");

    let computerChoice = generateComputerChoice();
    let computerChoiceValue = computerChoice.getAttribute("data-value");

    setImages(clickedButton, computerChoice);
    let choiceString = userChoiceValue + computerChoiceValue;

    await sleep(1000);

    //The choiceString is genereted from the data-value attribute of each tile.
    determineRoundWinner(choiceString);

    await sleep(2000);

    launchEasyGameSequence();
}

/**
 * 
 * @returns string
 * Method determines the winner by getting and comparing the scores.
 */
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

/**
 * 
 * @returns img element
 * Generates a computer choice by randomly genrating a number between 0 and 4 and use
 * that to select from the game tiles collection.
 */
function generateComputerChoice() {
    let gameTiles = document.getElementsByClassName('game-tile');
    let randomIndex = Math.floor(Math.random() * 5);
    let computerChoice = gameTiles[randomIndex]
    return computerChoice;
}

/**
 * 
 * @param {string} choiceString
 * Based on the choice string passed in, the winner is determined. The choice string is generated from the image tile
 * data-value attribute. 
 */
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

/**
 * 
 * @param {*} userChoice 
 * @param {*} computerChoice 
 * Sets the images for the user and computer choice tiles
 */
function setImages(userChoice, computerChoice) {
    document.getElementById("player-choice-card").setAttribute("src", userChoice.getAttribute("src"));
    document.getElementById("computer-choice-card").setAttribute("src", computerChoice.getAttribute("src"));
}

//Resets the images for the choices to the default question mark.
function resetImages() {
    document.getElementById("player-choice-card").setAttribute("src", "assets/images/question-player.png");
    document.getElementById("computer-choice-card").setAttribute("src", "assets/images/question-computer.png");
}

function resetUserImage() {
    document.getElementById("player-choice-card").setAttribute("src", "assets/images/question-player.png");
}

/**
 * 
 * @param {*} choiceString 
 * Method called when user wins. A dialog is shown with a message determined by the choiceString.
 */
function userWins(choiceString) {
    let statement = responseMap.get(choiceString);
    showDialogue("You win! " + statement);

    let playerScore = parseInt(document.getElementById("player-score").innerText);
    document.getElementById("player-score").innerText = ++playerScore;
}

/**
 * 
 * @param {*} choiceString 
 * Method called when user loses. A dialog is shown with a message determined by the choiceString.
 */
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

/**
 * Method called when user ties. A dialog is shown with a message determined by the choiceString.
 */
function userTies() {
    showDialogue("Tie! Neither of you won.");
}

//Method resets the game state to defaults.
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

/**
 * 
 * @returns Map
 * Method generates a hashmap with strings as keys. The strings are the explanations as to
 * why one choice wins over the other.
 */
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

    responseMap.set('paperspock', 'Paper disproves spock');
    responseMap.set('spockpaper', 'Paper disproves spock');

    responseMap.set('spockrock', 'Spock vaporizes rock.');
    responseMap.set('rockspock', 'Spock vaporizes rock.');

    responseMap.set('rockscissors', 'Rock crushes scissors.');
    responseMap.set('scissorsrock', 'Rock crushes scissors.');

    return responseMap;
}

/**
 * 
 * @param {*} message 
 * Method accepts a string to display some text to the user as a modal dialog.
 */
async function showDialogue(message) {
    let dialogueBox = document.getElementById("dialogue-box");
    dialogueBox.style.display = "block";

    let dialogueText = document.getElementById("modal-message");
    dialogueText.innerText = message;
    await sleep(2000);
    dialogueBox.style.display = "none";
}

/**
 * This method displays the words Rock! Paper! Scissors! Lizard! Spock! indiviudally in
 * dialog with a pause in between.
 */
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

/**
 * 
 * @param {*} message 
 * Method displays a message the end of the game in a modal dialog. This method
 * also sets the click listeners for the two buttons to play again or
 * end the game.
 */
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

/**
 * 
 * @param {*} event 
 * Sets difficultGame boolean on check
 */
function checkBoxClickCallback(event) {
    difficultGame = this.checked;
    setDifficultySliderVisibility();
}

/**
 * Method shuffles the image tiles. It gets the chilren of the game-tile-panel element. Copies them into an 
 * array, shuffles the array, clears and then appends these elements to the panel. The elements must
 * be copied into an array because the HTMLCollection object is immutable.
 */
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

//Method shuffles array. Credit for this method is attributed in the readme.
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

//Method sets the border on mouseover for the image tiles.
function onImageTileMouseOver(event) {
    if (boardReady) {
        this.style.transition = "0.2s";
        this.style.borderRadius = "15px"
        this.style.border = "4px solid red";

    }
}

//Removes the border when the mouse leaves an image tile
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

//Method uupdates the round value in the menu when the user manipulates the round slider.
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

/**
 * 
 * @param {*} event
 * Method retrieves the difficulty value from the slider. Based on the value, the roundInterval variable
 * is set (which determines the time between rounds), and the difficulty level is displayed in the side 
 * menu. 
 */
function onTimingSliderChange(event) {
    let newValue = parseInt(this.value);

    switch (newValue) {
        case 1:
            roundInterval = 3500;
            updateDifficultyMenuText("easy");
            break;
        case 2:
            roundInterval = 2000;
            updateDifficultyMenuText("normal");
            break;
        case 3:
            roundInterval = 1500;
            updateDifficultyMenuText("hard");
            break;
        default:
            roundInterval = 2000;
            updateDifficultyMenuText("normal");
    }
}

function updateDifficultyMenuText(level) {
    let difficultyLevel = document.getElementById("difficulty-level");
    difficultyLevel.innerText = level;
}

//This method displays or hides the difficulty menu based on whether or not a difficult game is played.
function setDifficultySliderVisibility() {
    let difficultyMenuItem = document.getElementById("difficulty-menu-item");
    if (difficultGame) {
        difficultyMenuItem.style.display = "block";
    } else {
        difficultyMenuItem.style.display = "none";
    }
}
