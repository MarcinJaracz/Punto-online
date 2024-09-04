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
			<div class="col-3 text-center">
				<div class="bg-primary p-1 fs-3 text-white rounded">
					no. players: {$noPlayers}<br />
					cards to win: {$cardGoal}
				</div>
				<Return />
			</div>
		</div>
	</div>
</body>
