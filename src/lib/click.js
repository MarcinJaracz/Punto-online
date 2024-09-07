import click from "$sounds/click.wav";

export function playClickSound() {
    const audio = new Audio(click);
    audio.play();
}
