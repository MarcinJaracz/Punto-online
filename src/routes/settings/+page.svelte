<script>
	import Return from "$components/return.svelte"
	import { soundsEnabled, toggleSounds } from "$lib/store"
	import { colorHead } from "$lib/coloredtext"

	const coloredText = colorHead("Settings")
</script>

<svelte:head>
	<title>Settings</title>
</svelte:head>

<main>
	<div class="container vh-100">
		<div class="d-flex justify-content-center align-items-center h-100">
			<div class="col-4">
				<div class="row justify-content-center">
					<div class="row justify-content-center py-3">
						<h1
							class="text-center py-4"
							style="font-family: 'Century Gothic Paneuropean'"
						>
							{@html coloredText}
						</h1>
						<h3
							class="text-center"
							style="cursor:pointer;"
							on:mousedown={toggleSounds}
						>
							sounds
							{#if $soundsEnabled}
								<i class="fas fa-volume-high"></i>
							{:else}
								<i class="fas fa-volume-slash"></i>
							{/if}
						</h3>
					</div>
					<Return />
				</div>
			</div>
		</div>
	</div>
</main>

<style>
	.col-4 {
		background-color: #ffffff96;
		border-radius: 10px;
		padding: 20px;
	}
</style>
