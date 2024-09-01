<!-- src/routes/board -->
<script>
	import Return from "$components/return.svelte"
	import { noPlayers, cardGoal } from "$lib/store"
</script>

<svelte:head>
	<title>Board</title>
</svelte:head>
<!-- TODO dodać storage przechwytujący wybory gracza -->
<body>
	<div class="container vh-100">
		<div class="d-flex justify-content-center align-items-center vh-100">
			<div class="col-2">
				onPlayer: {noPlayers}<br />
				cardGoal: {cardGoal}
				<Return />
			</div>
		</div>
	</div>
</body>
