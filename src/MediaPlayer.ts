
class MediaPlayer {
    media: HTMLMediaElement;
    plugins: Array<any>;
    conteiner!: HTMLElement;
    
    constructor(config: { el: HTMLMediaElement; plugins: never[]; }) {
        this.media = config.el;
        this.plugins = config.plugins || [];
        this.initPlayer();
        this.initPlugins();
    }

    initPlayer(){
        this.conteiner = document.createElement('div')
        this.conteiner.style.position = 'relative';
        this.media.parentNode.insertBefore(this.conteiner, this.media)
        this.conteiner.appendChild(this.media)
    }

    private initPlugins() {
        this.plugins.forEach(plugin => {
            plugin.run(this);
        });
    }
    play() {
        this.media.play();
    }
    pausa() {
        this.media.pause();
    }
    muted() {
        this.media.muted = true;
    }
    unmuted() {
        this.media.muted = false;
    }
    mute() {
        if (this.media.muted) {
            this.media.muted = false;
        }
        else {
            this.media.muted = true;
        }
    }
    togglePlay() {
        if (this.media.paused) {
            this.play();
        }
        else {
            this.pausa();
        }
    }
}










export default MediaPlayer;