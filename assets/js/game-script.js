document.addEventListener("DOMContentLoaded", function(){
    // Add click listener to play button.
    let playButton = document.getElementById("play-button");
    playButton.addEventListener("click", startRound);

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


function checkBoxClickCallback(event){
    alert("The checkbox was clicked");
}

function startRound(event){
    alert("Initiate gameplay sequence.");
}

function onTileClick(event){
    let clickedTileId = this.id;
    console.log(clickedTileId);
    alert("You clicked ${clickedTileId}")
}