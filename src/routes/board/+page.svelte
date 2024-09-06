<script>
	import Return from "$components/return.svelte"
	// import { noPlayers, cardsToWin } from "$lib/store"
	export let data
	const board = data.board
</script>

<svelte:head>
	<title>Board</title>
</svelte:head>
<body>
	<div class="container">
		<div class="d-flex justify-content-center align-items-center">
			<div class="col-7 mt-5">
				<div class="board">
					<div
						class="box"
						id="cell1"
					></div>
					<div
						class="box"
						id="cell2"
					></div>
					<div
						class="box"
						id="cell3"
					></div>
					<div
						class="box"
						id="cell4"
					></div>
					<div
						class="box"
						id="cell5"
					></div>
					<div
						class="box"
						id="cell6"
					></div>
					<div
						class="box"
						id="cell7"
					></div>
					<div
						class="box"
						id="cell8"
					></div>
					<div
						class="box"
						id="cell9"
					></div>
					<div
						class="box"
						id="cell10"
					></div>
					<div
						class="box"
						id="cell11"
					></div>
					<div
						class="box"
						id="cell12"
					></div>
					<div
						class="box"
						id="cell13"
					></div>
					<div
						class="box"
						id="cell14"
					></div>
					<div
						class="box"
						id="cell15"
					></div>
					<div
						class="box"
						id="cell16"
					></div>
					<div
						class="box"
						id="cell17"
					></div>
					<div
						class="box"
						id="cell18"
					></div>
					<div
						class="box"
						id="cell19"
					></div>
					<div
						class="box"
						id="cell20"
					></div>
					<div
						class="box"
						id="cell21"
					></div>
					<div
						class="box"
						id="cell22"
					></div>
					<div
						class="box"
						id="cell23"
					></div>
					<div
						class="box"
						id="cell24"
					></div>
					<div
						class="box"
						id="cell25"
					></div>
					<div
						class="box"
						id="cell26"
					></div>
					<div
						class="box"
						id="cell27"
					></div>
					<div
						class="box"
						id="cell28"
					></div>
					<div
						class="box"
						id="cell29"
					></div>
					<div
						class="box"
						id="cell30"
					></div>
					<div
						class="box"
						id="cell31"
					></div>
					<div
						class="box"
						id="cell32"
					></div>
					<div
						class="box"
						id="cell33"
					></div>
					<div
						class="box"
						id="cell34"
					></div>
					<div
						class="box"
						id="cell35"
					></div>
					<div
						class="box"
						id="cell36"
					></div>
				</div>
			</div>
		</div>
		<Return />
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
		border: 1px solid rgba(31, 31, 31, 0.137);
		background-color: rgba(79, 79, 79, 0.366);
		border-radius: 10px;
		font-size: 10px;
		font-weight: bold;
		cursor: default;
		box-shadow:
			0 4px 8px 0 rgba(0, 0, 0, 0.1),
			0 6px 20px 0 rgba(0, 0, 0, 0.1);
	}
</style>
