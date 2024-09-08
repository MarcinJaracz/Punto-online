export function load() {
	const colors = {
		newGame: "#007bff",
		continue: "#ffc107",
		about: "#28a745",
		exit: "#dc3545",
		settings: "#007bff",
	}

	function handleMouseOver(event, color) {
		event.target.style.backgroundColor = color
	}

	function handleMouseOut(event) {
		event.target.style.backgroundColor = ""
	}

	function handleFocus(event, color) {
		event.target.style.backgroundColor = color
	}

	function handleBlur(event) {
		event.target.style.backgroundColor = ""
	}
	return { colors, handleMouseOver, handleMouseOut, handleFocus, handleBlur }
}
