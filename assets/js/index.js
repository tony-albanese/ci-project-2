document.addEventListener("DOMContentLoaded", function() {

    let gameButton = document.getElementById("open-game-button");

    gameButton.addEventListener("click", function () {
            window.open("game.html").focus();
    });
});