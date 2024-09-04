import { writable } from "svelte/store"

export const cardGoal = writable(4)
export const noPlayers = writable(2)

export function setNoPlayers(amount) {
	noPlayers.set(amount)
	console.log("noPlayers set to:", amount)
}

export function setCardGoal(amount) {
	cardGoal.set(amount)
	console.log("cardGoal set to:", amount)
}
