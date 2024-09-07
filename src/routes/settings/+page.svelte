<script>
	import Return from "$components/return.svelte"
	import { soundsEnabled, toggleSounds } from "$lib/store"
</script>

<svelte:head>
	<title>Settings</title>
</svelte:head>

<main>
	<div class="container vh-100">
		<div class="d-flex justify-content-center align-items-center h-100">
			<div class="col-4">
				<div class="row justify-content-center">
					<div class="row justify-content-center">
						<h3
							class="text-center"
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
