<script>
	import Return from "$components/return.svelte"
	import { noPlayers, setGameExistState } from "$lib/store"
	import { playClickSound } from "$lib/click"
	const playerColors = ["primary", "success", "warning", "danger"]
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
			<!-- Kolumna 1 -->
			<div
				class="col-1 d-flex flex-column justify-content-evenly"
				style="flex-shrink: 0; min-width: 100px;"
			>
				{#each Array(Math.min($noPlayers, 2)).fill(0) as _, i}
					<div class="row">
						<div class="player-container">
							<div class="d-grid align-items-center justify-content-evenly">
								<div class="d-block p-2 bg-{playerColors[i]} rounded text-white fs-4 text-center mb-2">
									Player {i + 1}
								</div>
								<div
									class="box"
									id="player{i + 1}"
								>
									<img
										src="/card_head.svg"
										alt="Player 1 Icon"
										width="100"
										height="100"
									/>
								</div>
							</div>
						</div>
					</div>
				{/each}
			</div>

			<!-- Plansza -->
			<div
				class="col-7 mt-5 d-flex flex-column"
				style="flex-shrink: 0; min-width: 700px;"
			>
				<div class="board">
					{#each Array(36).fill(0) as _, i}
						<div
							class="box"
							id="cell{i + 1}"
						></div>
					{/each}
				</div>
			</div>

			<!-- Kolumna 2 -->
			<div
				class="col-1 d-flex flex-column justify-content-evenly"
				style="flex-shrink: 0; min-width: 100px;"
			>
				{#each Array(Math.max(0, $noPlayers - 2)).fill(0) as _, i}
					<div class="row">
						<div class="player-container">
							<div class="d-grid align-items-center justify-content-evenly">
								<div class="d-block p-2 bg-{playerColors[i + 2]} rounded text-white fs-4 text-center mb-2">
									Player {i + 3}
								</div>
								<div
									class="box"
									id="player{i + 3}"
								>
									<img
										src="/card_head.svg"
										alt="Player 1 Icon"
										width="100"
										height="100"
									/>
								</div>
							</div>
						</div>
					</div>
				{/each}
			</div>
		</div>
		<Return />
		<div class="nav justify-content-center pt-4">
			<h3>
				<a
					href="/"
					data-bs-toggle="tooltip"
					data-placement="right"
					title="Go back to main page"
					style="border-radius:10px;"
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
		max-width: 640px;
		margin: 0 auto;
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
	.box img {
		border-radius: 10px;
	}
	.box:hover {
		background-color: #4f4f4f9a;
		cursor: pointer;
	}
	.bg-primary {
		background-color: #0d6efd !important;
	}
	.bg-success {
		background-color: #198754 !important;
	}
	.bg-warning {
		background-color: #ffc107 !important;
	}
	.bg-danger {
		background-color: #dc3545 !important;
	}
</style>
