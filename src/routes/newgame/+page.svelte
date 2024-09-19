<script>
	import Return from "$components/return.svelte"
	import { fade } from "svelte/transition"
	import { sineInOut } from "svelte/easing"
	import { playClickSound } from "$lib/click"
	import { setNoPlayers, setcardsToWin, setGameExistState, doesTheGameExist } from "$lib/store.js"
	import { colorHead } from "$lib/coloredtext"

	const coloredText = colorHead("New Game")
	export let data
	setNoPlayers(2)
	setcardsToWin(5)
	let handleEscape = data.handleEscape
	let closePDF = data.closePDF
	let showPDF = data.showPDF
	let showModal = false

	function handlePlayClick() {
		if ($doesTheGameExist) {
			showModal = true
		} else {
			setGameExistState(true)
			playClickSound()
			window.location.href = "/board"
		}
	}

	function closeModal() {
		showModal = false
	}
</script>

<svelte:head>
	<title>New game</title>
</svelte:head>

<body>
	<div class="container vh-100">
		<div class="d-flex justify-content-center align-items-center h-100">
			<div class="col-7">
				<!-- title of the page -->
				<div class="row justify-content-center">
					<h1
						class="text-center py-4"
						style="font-family: 'Century Gothic Paneuropean'"
					>
						{@html coloredText}
					</h1>
				</div>
				<!-- pickers -->
				<div class="row justify-content-center py-5">
					<!-- numper of players -->
					<div class="d-flex flex-row py-2">
						<div class="col justify-content-center">
							<div
								class="d-flex p-2 bg-success fs-3 rounded text-white h-100 text-center align-items-center justify-content-center shadow"
								style="cursor: default;"
							>
								Choose number of players
							</div>
						</div>
						<div class="col d-flex justify-content-center">
							<div
								class="btn-group h-100 w-100 shadow"
								role="group"
							>
								<input
									type="radio"
									class="btn-check"
									name="options"
									id="option1"
									autocomplete="off"
									checked
									on:click={() => {
										setNoPlayers(2)
										playClickSound()
									}}
								/>
								<label
									class="btn btn-success d-flex align-items-center justify-content-center"
									for="option1"
								>
									<i class="fas fa-user" />
									<i class="fas fa-user" />
								</label>

								<input
									type="radio"
									class="btn-check"
									name="options"
									id="option2"
									autocomplete="off"
									on:click={() => {
										setNoPlayers(3)
										playClickSound()
									}}
								/>
								<label
									class="btn btn-success d-flex align-items-center justify-content-center"
									for="option2"
								>
									<i class="fas fa-user" /><br />
									<i class="fas fa-user" />
									<i class="fas fa-user" />
								</label>

								<input
									type="radio"
									class="btn-check"
									name="options"
									id="option3"
									autocomplete="off"
									on:click={() => {
										setNoPlayers(4)
										playClickSound()
									}}
								/>
								<label
									class="btn btn-success d-flex align-items-center justify-content-center"
									for="option3"
								>
									<i class="fas fa-user" />
									<i class="fas fa-user" /><br />
									<i class="fas fa-user" />
									<i class="fas fa-user" />
								</label>
							</div>
						</div>
					</div>
					<!-- number of cards to -->
					<div class="d-flex flex-row py-2">
						<div class="col justify-content-center">
							<span
								class="d-block p-2 fs-3 bg-success rounded text-white text-center align-items-center shadow"
								style="cursor: default;"
							>
								Choose how many cards are needed to win
							</span>
						</div>
						<div class="col justify-content-center">
							<div
								class="btn-group h-100 w-100 shadow"
								role="group"
							>
								<input
									type="radio"
									class="btn-check"
									name="options2"
									id="option2-1"
									autocomplete="off"
									on:change={() => {
										setcardsToWin(4)
										playClickSound()
									}}
								/>
								<label
									class="btn btn-success fs-3 centered-label"
									for="option2-1"
									>4
								</label>

								<input
									type="radio"
									class="btn-check"
									name="options2"
									id="option2-2"
									autocomplete="off"
									checked
									on:change={() => {
										setcardsToWin(5)
										playClickSound()
									}}
								/>
								<label
									class="btn btn-success fs-3 centered-label"
									for="option2-2"
									>5
								</label>
							</div>
						</div>
					</div>
				</div>
				<!--buttons -->
				<div class="d-flex justify-content-between align-items-center py-1">
					<div class="d-inline-block align-self-center bg-danger rounded">
						<Return />
					</div>
					<button
						type="button"
						class="btn btn-warning shadow fs-3"
						on:click={() => {
							showPDF()
							playClickSound()
						}}
						data-bs-toggle="tooltip"
						data-placement="right"
						title="Show user's manual"
					>
						<i class="fas fa-book-open-reader" /> How to play
					</button>

					<button
						type="button"
						class="btn btn-primary shadow fs-3"
						on:click={handlePlayClick}
					>
						<i class="fa-solid fa-play"></i> Play
					</button>
				</div>
			</div>
			<!-- Overlay pdf -->
			<div
				id="pdf-overlay"
				class="overlay"
			>
				<div class="overlay-content">
					<button
						class="close-btn"
						on:click={() => {
							closePDF()
							playClickSound()
						}}
						aria-label="Close PDF viewer"><i class="fas fa-xmark" /></button
					>
					<iframe
						title="overlay pdf"
						id="pdf-frame"
						style="width: 100%; height: 100%;"
						frameborder="0"
					></iframe>
				</div>
			</div>
			<!-- Overlay modal -->
			{#if showModal}
				<div
					class="modal fade show"
					id="staticBackdrop"
					tabindex="-1"
					aria-labelledby="staticBackdropLabel"
					aria-hidden="true"
					style="display: block;"
					transition:fade={{ delay: 250, duration: 400, easing: sineInOut }}
				>
					<div class="modal-dialog modal-dialog-centered">
						<div class="modal-content">
							<div class="modal-header">
								<h1
									class="modal-title fs-5"
									id="staticBackdropLabel"
								>
									Game exists
								</h1>
								<button
									type="button"
									class="btn-close"
									on:click={closeModal}
								></button>
							</div>
							<div class="modal-body">
								There is already a pending game.<br />Are You sure You want to begin a new game?
							</div>
							<div class="modal-footer">
								<button
									type="button"
									class="btn btn-secondary"
									on:click={closeModal}>Cancel</button
								>
								<button
									type="button"
									class="btn btn-danger"
									on:click={() => {
										closeModal()
										window.location.href = "/board"
									}}
								>
									<i class="fa-solid fa-play"></i> Play new game
								</button>
							</div>
						</div>
					</div>
				</div>
				<!-- Backdrop -->
				<div class="modal-backdrop fade show"></div>
			{/if}
		</div>
	</div>
</body>

<style>
	.col-7 {
		background-color: #ffffff96;
		border-radius: 10px;
		padding: 20px;
		width: min(800px, 90%);
		backdrop-filter: blur(5px);
		border-top: 1px solid rgba(255, 255, 255, 0.4);
		border-left: 1px solid rgba(255, 255, 255, 0.4);
		box-shadow: 3px 3px 3px rgba(0, 0, 0, 0.3);
	}
	.centered-label {
		display: flex;
		justify-content: center;
		align-items: center;
		height: 100%;
		font-size: 25px;
	}

	.overlay {
		display: none;
		position: fixed;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		background-color: #000000cc;
		z-index: 9999;
	}

	.overlay-content {
		position: relative;
		margin: auto;
		top: 5%;
		width: 75%;
		height: 90%;
		padding: 0px;
		z-index: 10000;
	}

	.close-btn {
		position: absolute;
		font-size: 20px;
		top: 12px;
		right: 17px;
		width: 32px;
		height: 32px;
		padding: 0px;
		cursor: pointer;
		background-color: #323639;
		color: #f1f1f1;
		z-index: 10001;
		text-align: center;
		justify-content: center;
		border-radius: 50%;
		border: 0 solid;
	}

	.close-btn:hover {
		color: red;
		background-color: #424649;
		cursor: pointer;
	}

	.modal-backdrop {
		background-color: #00000081;
		backdrop-filter: blur(50px);
		z-index: 1040;
	}
</style>
