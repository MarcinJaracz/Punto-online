<script>
	import Return from "$components/return.svelte"
	import { noPlayers, setGameExistState } from "$lib/store"
	import { playClickSound } from "$lib/click"
	import { dndzone } from "svelte-dnd-action"
	import { flip } from "svelte/animate"
	import { onMount, onDestroy } from "svelte"

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

	onMount(() => {
		loadCards()
		loadBoard()
	})

	onDestroy(() => {
		if (controller) {
			controller.abort()
		}
	})

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
		cards[path] = e.detail.items
	}

	function handleDndBoardConsider(e) {
		// console.log("Consider box id:", e.target.id, "\nDragging card:", e.detail.items[0]?.id)
	}

	function handleDndBoardFinalize(index, e) {
		const dropID = e.detail.info.id
		const targetID = e.target.id
		board[index].card = dropID

		console.log(">>> Finalize\nItems at the time:", e.detail?.items, "\ntargetID:", targetID, "\ndropID:", dropID)
		console.log("Board updated:\n", board)
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
		<div
			class="d-flex justify-content-evenly"
			style="overflow-x: hidden;"
		>
			<!-- Column 1  player 1 & 2-->
			<div
				class="col-1 d-flex flex-column justify-content-evenly"
				style="flex-shrink: 0; min-width: 100px;"
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
									dragDisabled: false,
									dropTargetStyle: {},
									dropAnimationDisabled: true,
									morphDisabled: true,
								}}
								on:consider={(e) => handleDndPlayer("player1", e)}
								on:finalize={(e) => handleDndPlayer("player1", e)}
							>
								<!-- Render cards for player 1 -->
								{#each playerCards.player1 as card, i (card.id)}
									<div
										class="flip-card"
										on:click={() => (card.flipped = !card.flipped)}
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
									dragDisabled: false,
									dropTargetStyle: {},
									dropAnimationDisabled: true,
									morphDisabled: true,
								}}
								on:consider={(e) => handleDndPlayer("player2", e)}
								on:finalize={(e) => handleDndPlayer("player2", e)}
							>
								<!-- Render cards for player 2 -->
								{#each playerCards.player2 as card, i (card.id)}
									<div
										class="flip-card"
										on:click={() => (card.flipped = !card.flipped)}
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
				class="col-7 mt-2 d-flex flex-column"
				style="flex-shrink: 0; min-width: 700px;"
			>
				<div class="board">
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
								dropAnimationDisabled: true,
								morphDisabled: true,
							}}
							on:consider={handleDndBoardConsider}
							on:finalize={(e) => handleDndBoardFinalize(index, e)}
						>
							cell_{index}
							<!-- temporally printing id inside a cell. -->

							{#each board[index].card as item (item.id)}
								<div
									class="flip-card-front"
									style="background-position: {getBackgroundPosition(item)}"
								></div>
							{/each}
						</div>
					{/each}
				</div>
			</div>

			<!-- Column 2  player 3 & 4-->
			<div
				class="col-1 d-flex flex-column justify-content-evenly"
				style="flex-shrink: 0; min-width: 100px;"
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
										dragDisabled: false,
										dropTargetStyle: {},
										dropAnimationDisabled: true,
										morphDisabled: true,
									}}
									on:consider={(e) => handleDndPlayer("player3", e)}
									on:finalize={(e) => handleDndPlayer("player3", e)}
								>
									<!-- Render cards for player 3 -->
									{#each playerCards.player3 as card, i (card.id)}
										<div
											class="flip-card"
											on:click={() => (card.flipped = !card.flipped)}
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
										dragDisabled: false,
										dropTargetStyle: {},
										dropAnimationDisabled: true,
										morphDisabled: true,
									}}
									on:consider={(e) => handleDndPlayer("player4", e)}
									on:finalize={(e) => handleDndPlayer("player4", e)}
								>
									<!-- Render cards for player 1 -->
									{#each playerCards.player4 as card, i (card.id)}
										<div
											class="flip-card"
											on:click={() => (card.flipped = !card.flipped)}
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
</body>

<style>
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
		font-size: 10px;
		font-weight: bold;
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
</style>
