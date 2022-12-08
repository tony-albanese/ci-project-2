/**
 * Register a click listener on the button in the hero screen.
 * The method opens the game page on click in the same window.
 */
document.addEventListener("DOMContentLoaded", function () {

    let gameButton = document.getElementById("open-game-button");

    gameButton.addEventListener("click", function () {
        window.open("game.html", "_self").focus();
    });
});