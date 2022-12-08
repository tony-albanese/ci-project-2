/**
 * These classes are to register the custom HTML components used in the game.
 * The all extend the DIV element. This code is transpiled into JavaScript.
 */
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


class ModalDialogue extends HTMLDivElement {
    constructor(){
        super();
    }
}
/**
 * This code registers the custom elements so they behave as divs in the
 * DOM.
 */
customElements.define("game-area", GameArea, { extends: "div" });
customElements.define("game-tile-panel", GameTilePanel, { extends: "div" });
customElements.define("game-play-panel", GamePlayPanel,{ extends: "div" } );
customElements.define("player-card", PlayerCard, { extends: "div" });
customElements.define("score-board", ScoreBoard, { extends: "div" });
customElements.define("computer-card", ComputerCard, { extends: "div" });
customElements.define("settings-panel", SettingsPanel, { extends: "div" });
customElements.define("modal-dialogue", ModalDialogue, { extends: "div" });
