export function load() {
	function showPDF() {
		var overlay = document.getElementById("pdf-overlay")
		var pdfFrame = document.getElementById("pdf-frame")
		var pdfUrl = "./user_manual.pdf"
		overlay.style.display = "block"
		pdfFrame.src = pdfUrl
		document.addEventListener("keydown", handleEscape)
	}

	function closePDF() {
		var overlay = document.getElementById("pdf-overlay")
		overlay.style.display = "none"
		document.removeEventListener("keydown", handleEscape)
	}

	function handleEscape(event) {
		if (event.key === "Escape") {
			closePDF()
		}
	}
	return { showPDF, closePDF, handleEscape }
}
