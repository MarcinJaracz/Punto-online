import { writable } from "svelte/store"

export const cardsToWin = writable(4)
export const noPlayers = writable(2)

export function setNoPlayers(amount) {
	noPlayers.set(amount)
	console.log("noPlayers set to:", amount)
}

export function setcardsToWin(amount) {
	cardsToWin.set(amount)
	console.log("cardsToWin set to:", amount)
}
