export function load() {
	const colors = {
		gitHub: "#007bff",
		linkedIn: "#ffc107",
		about: "#28a745",
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
	return {colors, handleMouseOver, handleMouseOut, handleFocus, handleBlur}
}