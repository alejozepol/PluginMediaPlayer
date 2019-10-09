"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var MediaPlayer = /** @class */ (function () {
    function MediaPlayer(config) {
        this.media = config.el;
        this.plugins = config.plugins || [];
        this.initPlayer();
        this.initPlugins();
    }
    MediaPlayer.prototype.initPlayer = function () {
        this.conteiner = document.createElement('div');
        this.conteiner.style.position = 'relative';
        this.media.parentNode.insertBefore(this.conteiner, this.media);
        this.conteiner.appendChild(this.media);
    };
    MediaPlayer.prototype.initPlugins = function () {
        var _this = this;
        this.plugins.forEach(function (plugin) {
            plugin.run(_this);
        });
    };
    MediaPlayer.prototype.play = function () {
        this.media.play();
    };
    MediaPlayer.prototype.pausa = function () {
        this.media.pause();
    };
    MediaPlayer.prototype.muted = function () {
        this.media.muted = true;
    };
    MediaPlayer.prototype.unmuted = function () {
        this.media.muted = false;
    };
    MediaPlayer.prototype.mute = function () {
        if (this.media.muted) {
            this.media.muted = false;
        }
        else {
            this.media.muted = true;
        }
    };
    MediaPlayer.prototype.togglePlay = function () {
        if (this.media.paused) {
            this.play();
        }
        else {
            this.pausa();
        }
    };
    return MediaPlayer;
}());
exports.default = MediaPlayer;
