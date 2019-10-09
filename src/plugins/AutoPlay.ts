import MediaPlayer from "../MediaPlayer";

class AutoPlay {
    constructor() { }
    run(player: MediaPlayer) {
        player.muted();
        player.play();
    }
}


export default AutoPlay;