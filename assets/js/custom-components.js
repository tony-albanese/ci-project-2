// game-area
// game-play-panel
// player-card
// score-board
// computer-card
// game-tile-panel
// settings-panel
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var GameArea = /** @class */ (function (_super) {
    __extends(GameArea, _super);
    function GameArea() {
        return _super.call(this) || this;
    }
    return GameArea;
}(HTMLDivElement));
var GamePlayPanel = /** @class */ (function (_super) {
    __extends(GamePlayPanel, _super);
    function GamePlayPanel() {
        return _super.call(this) || this;
    }
    return GamePlayPanel;
}(HTMLDivElement));
var GameTilePanel = /** @class */ (function (_super) {
    __extends(GameTilePanel, _super);
    function GameTilePanel() {
        return _super.call(this) || this;
    }
    return GameTilePanel;
}(HTMLDivElement));
var PlayerCard = /** @class */ (function (_super) {
    __extends(PlayerCard, _super);
    function PlayerCard() {
        return _super.call(this) || this;
    }
    return PlayerCard;
}(HTMLDivElement));
var ScoreBoard = /** @class */ (function (_super) {
    __extends(ScoreBoard, _super);
    function ScoreBoard() {
        return _super.call(this) || this;
    }
    return ScoreBoard;
}(HTMLDivElement));
var ComputerCard = /** @class */ (function (_super) {
    __extends(ComputerCard, _super);
    function ComputerCard() {
        return _super.call(this) || this;
    }
    return ComputerCard;
}(HTMLDivElement));
var SettingsPanel = /** @class */ (function (_super) {
    __extends(SettingsPanel, _super);
    function SettingsPanel() {
        return _super.call(this) || this;
    }
    return SettingsPanel;
}(HTMLDivElement));
var ModalDialogue = /** @class */ (function (_super) {
    __extends(ModalDialogue, _super);
    function ModalDialogue() {
        return _super.call(this) || this;
    }
    return ModalDialogue;
}(HTMLDivElement));
customElements.define("game-area", GameArea, { "extends": "div" });
customElements.define("game-tile-panel", GameTilePanel, { "extends": "div" });
customElements.define("game-play-panel", GamePlayPanel, { "extends": "div" });
customElements.define("player-card", PlayerCard, { "extends": "div" });
customElements.define("score-board", ScoreBoard, { "extends": "div" });
customElements.define("computer-card", ComputerCard, { "extends": "div" });
customElements.define("settings-panel", SettingsPanel, { "extends": "div" });
customElements.define("modal-dialogue", ModalDialogue, { "extends": "div" });
