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

class GamePlayPanel extends HTMLDivElement {
    constructor(){
        super();
    }
}
class GameTilePanel extends HTMLDivElement {
    constructor(){
        super();
    }
}

class PlayerCard extends HTMLDivElement {
    constructor(){
        super();
    }
}

class ScoreBoard extends HTMLDivElement {
    constructor(){
        super();
    }
}

class ComputerCard extends HTMLDivElement {
    constructor(){
        super();
    }
}

class SettingsPanel extends HTMLDivElement {
    constructor(){
        super();
    }
}

customElements.define("game-area", GameArea, { extends: "div" });
customElements.define("game-tile-panel", GameTilePanel, { extends: "div" });
customElements.define("game-play-panel", GamePlayPanel,{ extends: "div" } );
customElements.define("player-card", PlayerCard, { extends: "div" });
customElements.define("score-board", ScoreBoard, { extends: "div" });
customElements.define("computer-card", ComputerCard, { extends: "div" });
customElements.define("settings-panel", SettingsPanel, { extends: "div" });

