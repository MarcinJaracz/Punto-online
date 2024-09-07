import click from "$sounds/click.wav";
import { soundsEnabled } from "$lib/store.js";

export function playClickSound() {
    const audio = new Audio(click);
    
    soundsEnabled.subscribe(value => {
        if (value) {
            audio.muted = false;
            audio.play();
        } else {
            audio.muted = true;
        }
    });
}
