<script>
	import Return from "$components/return.svelte"
	import { noPlayers, cardsToWin } from "$lib/store"
	export let data
	const board = data.board
</script>

<svelte:head>
	<title>Board</title>
</svelte:head>
<!-- TODO dodać storage przechwytujący wybory gracza -->
<body>
	<div class="container vh-100">
		<div class="d-flex justify-content-center align-items-center vh-100">
			<div class="col-3 text-center">
				<div class="bg-primary p-1 fs-3 text-white rounded">
					Choosen options:<br />
					- {$noPlayers} Players -<br />
					- {$cardsToWin} cards to win -<br />
				</div>
				<div class="bg-success mt-3 p-1 fs-3 text-white rounded">
					- BOARD -<br />
					{#each board as row}
						{row}<br />
					{/each}
				</div>
				<Return />
			</div>
		</div>
	</div>
</body>
