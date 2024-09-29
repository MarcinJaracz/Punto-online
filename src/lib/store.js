import { writable } from "svelte/store"

function persist(key, initialValue) {
	let storedValue
	if (typeof localStorage !== "undefined") {
		storedValue = localStorage.getItem(key)
	}

	const store = writable(storedValue ? JSON.parse(storedValue) : initialValue)

	if (typeof localStorage !== "undefined") {
		store.subscribe((value) => {
			localStorage.setItem(key, JSON.stringify(value))
		})
	}

	return store
}
// number of players and amount of cards to win
export const cardsToWin = persist("cardsToWin", 5)
export const noPlayers = persist("noPlayers", 2)

export function setNoPlayers(amount) {
	noPlayers.set(amount)
	// console.log('players', amount);
	if (amount === 2) {
		setCardsToWin(5)
	} else {
		setCardsToWin(4)
	}
}

export function setCardsToWin(amount) {
	cardsToWin.set(amount)
	// console.log('target set to', amount)
}
// game state
export const doesTheGameExist = persist("doesTheGameExist", false)

export function setGameExistState(bool) {
	doesTheGameExist.set(bool)
}

// sounds
export const soundsEnabled = persist("soundsEnabled", true)

export function toggleSounds() {
	soundsEnabled.update((currentValue) => !currentValue)
}
