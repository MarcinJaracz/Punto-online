// store.js

import { writable } from "svelte/store"

export const noPlayers = writable(0)
export const cardGoal = writable(0)

export function setNoPlayers(amount) {
	noPlayers.set(amount)
	console.log(noPlayers)
}

export function setCardGoal(amount) {
	cardGoal.set(amount)
	console.log(cardGoal)
}

