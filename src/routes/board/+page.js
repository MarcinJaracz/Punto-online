// +page.js
export function load() {
	let board = []
	let rows = 6
	let columns = 6

	let value = 0
	// creating two-dimensional board
	for (let i = 0; i < rows; i++) {
		board[i] = []
		for (let j = 0; j < columns; j++) {
			board[i][j] = value++
		}
	}
	return { board }
}
