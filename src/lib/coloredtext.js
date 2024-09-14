export function colorHead(text) {
	const colors = ["#dc3545", "#007bff", "#ffc107", "#28a745"]
	const letters = text.split("")

	return letters
		.map((letter, index) => {
			return `<span style="color: ${colors[index % colors.length]}; text-shadow: 4px 4px 4px rgba(0, 0, 0, 0.7);">${letter}</span>`
		})
		.join("")
}
