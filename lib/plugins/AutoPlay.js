"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var AutoPlay = /** @class */ (function () {
    function AutoPlay() {
    }
    AutoPlay.prototype.run = function (player) {
        player.muted();
        player.play();
    };
    return AutoPlay;
}());
exports.default = AutoPlay;
