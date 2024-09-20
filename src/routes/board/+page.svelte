<script>
	import Return from "$components/return.svelte"
	import Cards from "$components/cards.svelte"
	import { noPlayers, setGameExistState } from "$lib/store"
	import { playClickSound } from "$lib/click"
	import { dndzone } from "svelte-dnd-action"

	let cardItems = []
	let customStyle = { border: "1px solid #1f1f1f23;" }

	let playerCards = {
		player1: [],
		player2: [],
		player3: [],
		player4: [],
	}

	function handleDragOver(event) {
		event.preventDefault()
	}

	function handleDrop(event) {
		event.preventDefault()
		const cardId = event.dataTransfer.getData("text/plain")
		const cardElement = document.getElementById(cardId)

		if (cardElement && event.target.classList.contains("box")) {
			event.target.appendChild(cardElement)
		}
	}
</script>

<svelte:head>
	<title>Board</title>
</svelte:head>
<body>
	<div class="container-fluid">
		<div
			class="d-flex justify-content-evenly"
			style="overflow-x: hidden;"
		>
			<!-- Column 1 -->
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
								use:dndzone={{ items: playerCards.player1 }}
							>
								<Cards color="blue" />
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
								use:dndzone={{ items: playerCards.player2 }}
							>
								<Cards color="green" />
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
					{#each Array(36).fill(0) as _, i}
						<div
							class="box"
							id="cell{i + 1}"
							use:dndzone={{ items: cardItems, dropTargetStyle: customStyle }}
							on:dragover={handleDragOver}
							on:drop={handleDrop}
						></div>
					{/each}
				</div>
			</div>

			<!-- Column 2 -->
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
									use:dndzone={{ items: playerCards.player3 }}
								>
									<Cards color="yellow" />
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
									use:dndzone={{ items: playerCards.player4 }}
								>
									<Cards color="red" />
								</div>
							</div>
						</div>
					</div>
				{/if}
			</div>
		</div>
		<div class="nav justify-content-center pt-4">
			<Return />
		</div>
		<!-- buttons -->
		<div class="nav justify-content-center pt-4">
			<h3>
				<a
					href="/"
					data-bs-toggle="tooltip"
					data-placement="right"
					title="Go back to main page"
					style="--hover-color: #dc3545;"
					on:click={() => setGameExistState(false)}
					on:mousedown={playClickSound}
				>
					<i class="fa-sharp fa-light fa-circle-arrow-left" /> finish this game and exit
				</a>
			</h3>
		</div>
	</div>
</body>

<style>
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
</style>
