// game-area
// game-play-panel
// player-card
// score-board
// computer-card
// game-tile-panel
// settings-panel

class GameArea extends HTMLDivElement {
    constructor(){
        super();
    }
}

class GameTilePanel extends HTMLDivElement {
    constructor(){
        super();
    }
}

customElements.define("game-area", GameArea, { extends: "div" });
customElements.define("game-tile-panel", GameTilePanel, { extends: "div" });

