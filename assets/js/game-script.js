document.addEventListener("DOMContentLoaded", function(){
    // Add click listener to play button.
    let playButton = document.getElementById("play-button");
    playButton.addEventListener("click", startRound);

    // Add click listener to check button
    let checkBox = document.getElementById("difficulty-level-switch");
    checkBox.addEventListener("click", checkBoxClickCallback);

    // Add click listener to choice tiles.
    // Get the container and loop through the siblings.

    let tilePanel = document.getElementsByTagName("game-tile-panel");
    console.log(tilePanel);


});


function checkBoxClickCallback(event){
    alert("The checkbox was clicked");
}

function startRound(event){
    alert("Initiate gameplay sequence.");
}