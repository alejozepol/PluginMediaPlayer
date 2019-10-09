"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var AutoPause = /** @class */ (function () {
    function AutoPause() {
        this.threshold = 0.25;
        this.handleIntersection = this.handleIntersection.bind(this);
        this.handvisibilityState = this.handvisibilityState.bind(this);
    }
    AutoPause.prototype.run = function (player) {
        this.player = player;
        var observer = new IntersectionObserver(this.handleIntersection, {
            threshold: this.threshold
        });
        observer.observe(this.player.media);
        document.addEventListener("visibilitychange", this.handvisibilityState);
    };
    AutoPause.prototype.handleIntersection = function (entries) {
        var entry = entries[0];
        var isVisible = entry.intersectionRatio >= this.threshold;
        if (isVisible) {
            this.player.play();
        }
        else {
            this.player.pausa();
        }
    };
    AutoPause.prototype.handvisibilityState = function () {
        var isVisible = document.visibilityState === "visible";
        if (isVisible) {
            this.player.play();
        }
        else {
            this.player.pausa();
        }
    };
    return AutoPause;
}());
exports.default = AutoPause;
