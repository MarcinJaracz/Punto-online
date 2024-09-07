<script>
	import Return from "$components/return.svelte"
	import { setNoPlayers, setcardsToWin } from "$lib/store.js"
	export let data
	let handleEscape = data.handleEscape
	let closePDF = data.closePDF
	let showPDF = data.showPDF
</script>

<svelte:head>
	<title>New game</title>
</svelte:head>

<body>
	<div class="container vh-100">
		<div class="d-flex justify-content-center align-items-center h-100">
			<div class="col-5">
				<div class="row justify-content-center">
					<h1 class="text-center">New Game</h1>
				</div>
				<div class="row justify-content-center py-5">
					<div class="d-flex flex-row py-1">
						<div class="col justify-content-center">
							<span class="d-block p-2 bg-danger rounded text-white h-100 text-center align-middle">
								Choose number of players
							</span>
						</div>
						<div class="col justify-content-center">
							<div
								class="btn-group h-100 w-100"
								role="group"
							>
								<input
									type="radio"
									class="btn-check"
									name="options"
									id="option1"
									autocomplete="off"
									checked
									on:click={() => setNoPlayers(2)}
								/>
								<label
									class="btn btn-danger"
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
									on:click={() => setNoPlayers(3)}
								/>
								<label
									class="btn btn-danger"
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
									on:click={() => setNoPlayers(4)}
								/>
								<label
									class="btn btn-danger"
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
					<div class="d-flex flex-row py-1">
						<div class="col justify-content-center">
							<span class="d-block p-2 bg-success rounded inline-block text-white position-relative">
								Choose how many cards are needed to win
							</span>
						</div>
						<div class="col justify-content-center">
							<div
								class="btn-group h-100 w-100"
								role="group"
							>
								<input
									type="radio"
									class="btn-check"
									name="options2"
									id="option2-1"
									autocomplete="off"
									checked
									on:change={() => setcardsToWin(4)}
								/>
								<label
									class="btn btn-success centered-label"
									for="option2-1"
									>4
								</label>

								<input
									type="radio"
									class="btn-check"
									name="options2"
									id="option2-2"
									autocomplete="off"
									on:change={() => setcardsToWin(5)}
								/>
								<label
									class="btn btn-success centered-label"
									for="option2-2"
									>5
								</label>
							</div>
						</div>
					</div>
				</div>
				<div class="row justify-content-center py-1">
					<div class="col-10 text-center">
						<button
							type="button"
							class="btn btn-warning"
							on:click={showPDF}
							data-bs-toggle="tooltip"
							data-placement="right"
							title="Show user's manual"
						>
							How to play <i class="fa-solid fa-question" />
						</button>
					</div>
				</div>
				<!-- Overlay -->
				<div
					id="pdf-overlay"
					class="overlay"
				>
					<div class="overlay-content">
						<button
							class="close-btn"
							on:click={closePDF}
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
				<div class="row justify-content-center py-1">
					<div class="col-10 text-center">
						<a
							href="/board"
							data-sveltekit-preload-data="tap"
						>
							<btn
								type="button"
								class="btn btn-primary"
							>
								<i class="fa-solid fa-play" />
								Play
							</btn>
						</a>
					</div>
				</div>
				<div class="row justify-content-center">
					<Return />
				</div>
			</div>
		</div>
	</div>
</body>

<style>
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
		background-color: rgba(0, 0, 0, 0.8);
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
		background-color: rgb(50, 54, 57);
		color: rgb(241, 241, 241);
		z-index: 10001;
		text-align: center;
		justify-content: center;
		border-radius: 50%;
		border: 0 solid;
	}
	.close-btn:hover {
		color: red;
		background-color: rgb(66, 70, 73);
	}
</style>
