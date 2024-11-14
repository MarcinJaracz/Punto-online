<script>
	import Return from "$components/return.svelte"
	import { noPlayers, cardsToWin, setGameExistState } from "$lib/store"
	import { playClickSound } from "$lib/click"
	import { dndzone, SHADOW_ITEM_MARKER_PROPERTY_NAME } from "svelte-dnd-action"
	import { flip } from "svelte/animate"
	import { onMount, onDestroy } from "svelte"
	import { fade } from "svelte/transition"
	import { sineInOut } from "svelte/easing"
	import { readable } from "svelte/store"
	import { browser } from "$app/environment"

	const flipDurationMs = 500
	let cards = []
	let board = []
	let controller
	let playerCards = {
		player1: [],
		player2: [],
		player3: [],
		player4: [],
	}
	let showModal = false
	let foundColor = null
	let timer = 60 // seconds
	let start = new Date().getTime()
	const mstime = readable(new Date().getTime(), (set) => {
		let animationFrame
		const next = () => {
			set(new Date().getTime())
			animationFrame = requestAnimationFrame(next)
		}
		if (browser && window.requestAnimationFrame) {
			next()
			return () => cancelAnimationFrame(animationFrame)
		} else {
			return () => {}
		}
	}) //WIP start timer after PlayerTurn callout
	let flagBlue = true
	let flagGreen = true
	let flagYellow = true
	let flagRed = true
	let currentPlayer = 1
	let possible

	onMount(() => {
		loadBoard()
		loadCards().then(playersTurn)
	})

	onDestroy(() => {
		if (controller) {
			controller.abort()
		}
	})

	$: time = Math.floor(($mstime - start) / 1000)
	$: toWait = Math.max(0, timer - time)
	$: progress = (1 - toWait / timer) * 100

	async function loadCards() {
		controller = new AbortController()
		const signal = controller.signal
		try {
			const response = await fetch("/cards.json", { signal })
			if (response.ok) {
				let allCards = await response.json()
				cards = allCards
				splitCardsByColor(cards)
				shuffleCardsForPlayers()
			} else {
				console.error("Failed to load cards:", response.statusText)
			}
		} catch (error) {
			if (error.name === "AbortError") {
				console.log("Fetch aborted")
			} else {
				console.error("Error loading cards:", error)
			}
		}
	}

	async function loadBoard() {
		try {
			const response = await fetch("/board.json")
			if (!response.ok) {
				throw new Error(`Failed to load board: ${response.statusText}`)
			}
			const data = await response.json()
			if (Array.isArray(data)) {
				board = [...data]
				console.log(">>> Board loaded properly.")
			} else {
				console.error("Unexpected board format:", data)
			}
		} catch (error) {
			console.error("Error loading board:", error)
		}
	}

	function shuffle(array) {
		for (let i = array.length - 1; i > 0; i--) {
			const j = Math.floor(Math.random() * (i + 1))
			;[array[i], array[j]] = [array[j], array[i]]
		}
	}

	function shuffleCardsForPlayers() {
		for (let player in playerCards) {
			shuffle(playerCards[player])
		}
	}

	function handleDndPlayer(path, e) {
		playerCards[path] = e.detail.items
	}

	function handleDndBoardConsider(index, e) {
		board[index].card = e.detail.items
		board = [...board]

		let pBoard = board[index].points
		let pHand = e.detail.items[0].points

		console.log("|Consider|\n\npoints on hand:", pHand, "\npoints on board:", pBoard)

		if (pHand > pBoard) {
			possible = true
		} else {
			possible = false
		}
	}

	function newDndFinalize(index, e) {
		if (possible == true) {
			handleDndBoardFinalize(index, e)
		}
	}

	function handleDndBoardFinalize(index, e) {
		const { items } = e.detail
		const { points, color } = items[0]
		let pBoard = board[index].points
		let pHand = points

		console.log("|Finalize|\n\npoints on hand:", pHand, "\npoints on board:", pBoard)

		board[index] = {
			...board[index],
			card: items,
			isCellFull: true,
			points,
			color,
		}
		board = [...board]
		console.log("|Finalize board|\n", board)
		goalFunc(board)

		playersTurn()
	}

	function splitCardsByColor(cards) {
		playerCards.player3 = cards.filter((card) => card.color === "yellow")
		playerCards.player2 = cards.filter((card) => card.color === "green")
		playerCards.player1 = cards.filter((card) => card.color === "blue")
		playerCards.player4 = cards.filter((card) => card.color === "red")
	}

	function getBackgroundPosition(card) {
		const x = card.position.col * 100
		const y = card.position.row * 100
		return `-${x}px -${y}px`
	}

	function goalFunc(board) {
		const numRows = 6
		const numCols = 6
		const sequenceLength = $cardsToWin

		// horizontal loop
		for (let row = 0; row < numRows; row++) {
			for (let col = 0; col <= numCols - sequenceLength; col++) {
				const colors = new Set()
				for (let k = 0; k < sequenceLength; k++) {
					const index = row * numCols + (col + k)
					if (board[index] && board[index].color !== undefined) {
						colors.add(board[index].color)
					}
				}
				if (colors.size === 1 && !colors.has(null)) {
					foundColor = colors.values().next().value
					showModal = true
				}
			}
		}

		// vertical loop
		for (let col = 0; col < numCols; col++) {
			for (let row = 0; row <= numRows - sequenceLength; row++) {
				const colors = new Set()
				for (let k = 0; k < sequenceLength; k++) {
					const index = (row + k) * numCols + col
					if (board[index] && board[index].color !== undefined) {
						colors.add(board[index].color)
					}
				}
				if (colors.size === 1 && !colors.has(null)) {
					foundColor = colors.values().next().value
					showModal = true
				}
			}
		}

		// diagonal right loop
		for (let row = 0; row <= numRows - sequenceLength; row++) {
			for (let col = 0; col <= numCols - sequenceLength; col++) {
				const colors = new Set()
				for (let k = 0; k < sequenceLength; k++) {
					const index = (row + k) * numCols + (col + k)
					if (board[index] && board[index].color !== undefined) {
						colors.add(board[index].color)
					}
				}
				if (colors.size === 1 && !colors.has(null)) {
					foundColor = colors.values().next().value
					showModal = true
				}
			}
		}

		// diagonal left loop
		for (let row = 0; row <= numRows - sequenceLength; row++) {
			for (let col = sequenceLength - 1; col < numCols; col++) {
				const colors = new Set()
				for (let k = 0; k < sequenceLength; k++) {
					const index = (row + k) * numCols + (col - k)
					if (board[index] && board[index].color !== undefined) {
						colors.add(board[index].color)
					}
				}
				if (colors.size === 1 && !colors.has(null)) {
					foundColor = colors.values().next().value
					showModal = true
				}
			}
		}

		return foundColor
	}

	function playersTurn() {
		start = new Date().getTime()
		timer = 60
		toWait = timer

		// console.warn(`player ${currentPlayer} turn`)
		flagBlue = currentPlayer !== 1
		flagGreen = currentPlayer !== 2
		flagYellow = currentPlayer !== 3
		flagRed = currentPlayer !== 4

		currentPlayer = (currentPlayer % $noPlayers) + 1
		//[ ] Add automatic flip animation at the begining of player's turn
	}

	$: possible, console.warn("$: Can I lay down the card", possible)
</script>

<svelte:head>
	<title>Board</title>
</svelte:head>

<body>
	<div class="container-fluid">
		<!-- buttons -->
		<div
			class="d-flex"
			style="position:absolute;"
		>
			<div class="d-inline-block">
				<Return />
			</div>
			<h3>
				<a
					href="/"
					data-bs-toggle="tooltip"
					data-placement="right"
					title="Go back to main page"
					style="--hover-color: #dc3545; margin-top:6px"
					on:click={() => setGameExistState(false)}
					on:mousedown={playClickSound}
				>
					<i class="fa-light fa-circle-xmark" /> end game
				</a>
			</h3>
		</div>

		<!-- main body -->
		<div class="d-flex flex-column justify-content-evenly">
			<!-- timer -->
			<div class="d-flex flex-row align-items-center justify-content-center mt-3 gap-3">
				<div class=" fs-3 fw-bold">{toWait}s</div>
				<div
					class="progress"
					style="width:600px; height:40px"
				>
					<div
						class="progress-bar progress-bar-striped progress-bar-animated bg-info border-secondary fs-3 fw-bold text-center text-dark"
						role="progressbar"
						style="width: {100 - progress}%"
						aria-valuenow={progress}
						aria-valuemin="0"
						aria-valuemax="60"
					></div>
				</div>
				<!--[x] connect timer with players turn -->
			</div>

			<!-- board and players -->
			<div class="d-flex flex-row align-items-center justify-content-evenly p-1 m-1 gap-5">
				<!-- Column 1  player 1 & 2-->
				<div
					class="col-1 d-flex flex-column justify-content-evenly gap-5"
					style="flex-shrink: 0; min-width: 120px;"
				>
					<div class="row">
						<div class="player-container">
							<div class="d-grid align-items-center justify-content-evenly">
								<div
									class="d-block p-2 bg-primary rounded text-white fs-4 text-center mb-2 shadow"
									style="cursor: default;"
								>
									Player 1
								</div>
								<div
									class="box"
									id="player1"
									use:dndzone={{
										items: playerCards.player1,
										dragDisabled: flagBlue,
										dropTargetStyle: {},
										dropAnimationDisabled: false,
										flipDurationMs: flipDurationMs,
										morphDisabled: true,
										dropFromOthersDisabled: true,
										centreDraggedOnCursor: true,
									}}
									on:consider={(e) => handleDndPlayer("player1", e)}
									on:finalize={(e) => handleDndPlayer("player1", e)}
								>
									<!-- Render cards for player 1 -->
									{#each playerCards.player1 as card, i (card.id)}
										<div
											class="flip-card"
											on:click={() => !flagBlue && (card.flipped = !card.flipped && !flagBlue)}
											animate:flip={{ duration: flipDurationMs }}
											style="z-index: {playerCards.player1.length - i};"
										>
											<div class="flip-card-inner {card.flipped ? 'flipped' : ''}">
												<div
													class="flip-card-front"
													style="background-position: {getBackgroundPosition(card)}"
												></div>
												<div class="flip-card-back"></div>
											</div>
										</div>
									{/each}
								</div>
							</div>
						</div>
					</div>

					<div class="row">
						<div class="player-container">
							<div class="d-grid align-items-center justify-content-evenly">
								<div
									class="d-block p-2 bg-success rounded text-white fs-4 text-center mb-2 shadow"
									style="cursor: default;"
								>
									Player 2
								</div>
								<div
									class="box"
									id="player2"
									use:dndzone={{
										items: playerCards.player2,
										dragDisabled: flagGreen,
										dropTargetStyle: {},
										dropAnimationDisabled: false,
										flipDurationMs: flipDurationMs,
										morphDisabled: true,
										dropFromOthersDisabled: true,
										centreDraggedOnCursor: true,
									}}
									on:consider={(e) => handleDndPlayer("player2", e)}
									on:finalize={(e) => handleDndPlayer("player2", e)}
								>
									<!-- Render cards for player 2 -->
									{#each playerCards.player2 as card, i (card.id)}
										<div
											class="flip-card"
											on:click={() => !flagGreen && (card.flipped = !card.flipped && !flagGreen)}
											animate:flip={{ duration: flipDurationMs }}
											style="z-index: {playerCards.player1.length - i}; "
										>
											<div class="flip-card-inner {card.flipped ? 'flipped' : ''}">
												<div
													class="flip-card-front"
													style="background-position: {getBackgroundPosition(card)}"
												></div>
												<div class="flip-card-back"></div>
											</div>
										</div>
									{/each}
								</div>
							</div>
						</div>
					</div>
				</div>

				<!-- Board -->
				<div
					class="col-7 mt-2 d-flex flex-column align-items-center"
					style="flex-shrink: 0; min-width: 700px;"
				>
					<div class="board m-0">
						{#each board as card, index}
							<div
								class="box"
								id="cell_{index}"
								name="cell_{index}"
								data-index={index}
								use:dndzone={{
									items: board[index].card,
									dropTargetStyle: {},
									dragDisabled: true,
									morphDisabled: true,
									dropFromOthersDisabled: !!board[index].isCellFull, //Q Should I leave it always on false?
									//TODO add function to allow cards to be laid down if the holding card has more points than the card on the board
								}}
								on:consider={(e) => handleDndBoardConsider(index, e)}
								on:finalize={(e) => newDndFinalize(index, e)}
							>
								{#each board[index].card as item (item.id)}
									<div
										class="flip-card-front"
										style="background-position: {getBackgroundPosition(item)}"
									/>
									{#if item[SHADOW_ITEM_MARKER_PROPERTY_NAME]}
										<div class="custom-shadow-item">
											<div
												class="flip-card-front"
												style="background-position: {getBackgroundPosition(item)}"
											/>
										</div>
									{/if}
								{/each}
							</div>
						{/each}
					</div>
				</div>

				<!-- Column 2  player 3 & 4-->
				<div
					class="col-1 d-flex flex-column justify-content-evenly gap-5"
					style="flex-shrink: 0; min-width: 120px;"
				>
					<!-- Player 3, displayed if numberOfPlayers > 2 -->
					{#if $noPlayers > 2}
						<div class="row">
							<div class="player-container">
								<div class="d-grid align-items-center justify-content-evenly">
									<div
										class="d-block p-2 bg-warning rounded text-white fs-4 text-center mb-2 shadow"
										style="cursor: default;"
									>
										Player 3
									</div>
									<div
										class="box"
										id="player3"
										use:dndzone={{
											items: playerCards.player3,
											dragDisabled: flagYellow,
											dropTargetStyle: {},
											dropAnimationDisabled: false,
											flipDurationMs: flipDurationMs,
											morphDisabled: true,
											dropFromOthersDisabled: true,
											centreDraggedOnCursor: true,
										}}
										on:consider={(e) => handleDndPlayer("player3", e)}
										on:finalize={(e) => handleDndPlayer("player3", e)}
									>
										<!-- Render cards for player 3 -->
										{#each playerCards.player3 as card, i (card.id)}
											<div
												class="flip-card"
												on:click={() => !flagYellow && (card.flipped = !card.flipped && !flagYellow)}
												animate:flip={{ duration: flipDurationMs }}
												style="z-index: {playerCards.player1.length - i}; "
											>
												<div class="flip-card-inner {card.flipped ? 'flipped' : ''}">
													<div
														class="flip-card-front"
														style="background-position: {getBackgroundPosition(card)}"
													></div>
													<div class="flip-card-back"></div>
												</div>
											</div>
										{/each}
									</div>
								</div>
							</div>
						</div>
					{/if}

					<!-- Player 4, displayed if numberOfPlayers > 3 -->
					{#if $noPlayers > 3}
						<div class="row">
							<div class="player-container">
								<div class="d-grid align-items-center justify-content-evenly">
									<div
										class="d-block p-2 bg-danger rounded text-white fs-4 text-center mb-2 shadow"
										style="cursor: default;"
									>
										Player 4
									</div>
									<div
										class="box"
										id="player4"
										use:dndzone={{
											items: playerCards.player4,
											dragDisabled: flagRed,
											dropTargetStyle: {},
											dropAnimationDisabled: false,
											flipDurationMs: flipDurationMs,
											morphDisabled: true,
											dropFromOthersDisabled: true,
											centreDraggedOnCursor: true,
										}}
										on:consider={(e) => handleDndPlayer("player4", e)}
										on:finalize={(e) => handleDndPlayer("player4", e)}
									>
										<!-- Render cards for player 1 -->
										{#each playerCards.player4 as card, i (card.id)}
											<div
												class="flip-card"
												on:click={() => !flagRed && (card.flipped = !card.flipped && !flagRed)}
												animate:flip={{ duration: flipDurationMs }}
												style="z-index: {playerCards.player1.length - i}; "
											>
												<div class="flip-card-inner {card.flipped ? 'flipped' : ''}">
													<div
														class="flip-card-front"
														style="background-position: {getBackgroundPosition(card)}"
													></div>
													<div class="flip-card-back"></div>
												</div>
											</div>
										{/each}
									</div>
								</div>
							</div>
						</div>
					{/if}
				</div>
			</div>
		</div>

		<!-- overlay modal -->
		{#if showModal}
			<div
				class="modal fade show"
				id="staticBackdrop"
				tabindex="-1"
				aria-labelledby="staticBackdropLabel"
				aria-hidden="true"
				style="display: block;"
				transition:fade={{ delay: 750, duration: 500, easing: sineInOut }}
			>
				<div class="modal-dialog modal-dialog-centered">
					<div class="modal-content align-items-center">
						<div class="modal-header">
							<h1
								class="modal-title fs-1"
								id="staticBackdropLabel"
							>
								🥳 Congratulations 🎉
							</h1>
						</div>
						<div class="modal-body fs-2">✨{foundColor} wins✨</div>
						<div class="modal-footer">
							<button
								type="button"
								class="btn btn-success fs-3"
								on:click={() => {
									showModal = false
									window.location.href = "/"
									setGameExistState(false)
								}}
							>
								Go to main menu
							</button>
						</div>
					</div>
				</div>
			</div>
			<!-- Backdrop -->
			<div class="modal-backdrop fade show" />
		{/if}
	</div>
</body>

<style>
	.custom-shadow-item {
		opacity: 0.5;
		display: flex;
		align-items: center;
		justify-content: center;
	}

	.flip-card {
		position: absolute;
		width: 100px;
		height: 100px;
		perspective: 1000px;
		cursor: grab;
	}

	.flip-card-inner {
		position: relative;
		width: 100%;
		height: 100%;
		transition: transform 0.6s;
		transform-style: preserve-3d;
	}

	.flipped {
		transform: rotateY(180deg);
	}

	.flip-card-front,
	.flip-card-back {
		position: absolute;
		width: 100px;
		height: 100px;
		backface-visibility: hidden;
		border-radius: 10px;
	}

	.flip-card-front {
		background-image: url("/all-cards.webp");
		background-size: 900px 400px;
	}

	.flip-card-back {
		background-image: url("/Punto-Icon.webp");
		background-size: cover;
		transform: rotateY(180deg);
	}

	.board {
		display: grid;
		grid-template-columns: repeat(6, 1fr);
		grid-gap: 10px;
		margin: 0 auto;
		width: 690px;
		height: 690px;
		padding: 20px;
		background-color: #ffffff96;
		border-radius: 10px;
		backdrop-filter: blur(5px);
		border-top: 1px solid rgba(255, 255, 255, 0.4);
		border-left: 1px solid rgba(255, 255, 255, 0.4);
		box-shadow: 3px 3px 3px rgba(0, 0, 0, 0.3);
	}

	.box {
		display: flex;
		align-items: center;
		justify-content: center;
		width: 100px;
		height: 100px;
		border: 1px solid #1f1f1f23;
		background-color: #4f4f4f5d;
		border-radius: 10px;
		cursor: default;
		box-shadow:
			0 4px 8px 0 #0000001a,
			0 6px 20px 0 #0000001a;
	}

	.box:hover {
		background-color: #4f4f4f9a;
	}

	.player-container {
		padding: 25px;
		background-color: #ffffff96;
		border-radius: 10px;
		backdrop-filter: blur(5px);
		border-top: 1px solid rgba(255, 255, 255, 0.4);
		border-left: 1px solid rgba(255, 255, 255, 0.4);
		box-shadow: 3px 3px 3px rgba(0, 0, 0, 0.3);
		display: flex;
		justify-content: center;
		align-items: center;
	}

	h3 {
		margin-bottom: 0;
	}

	.modal-backdrop {
		width: 100%;
		height: 100%;
		background-color: #00000081;
		backdrop-filter: blur(50px);
		z-index: 1040;
	}
</style>
