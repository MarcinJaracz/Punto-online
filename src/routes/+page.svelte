<script>
	import { playClickSound } from "$lib/click"
	import { doesTheGameExist } from "$lib/store.js"
	import { colorHead } from "$lib/coloredtext"

	const coloredText = colorHead("Punto Online")
</script>

<svelte:head>
	<title>Punto Online</title>
</svelte:head>

<div class="container vh-100">
	<div class="d-flex justify-content-center align-items-center vh-100">
		<div class="col-4">
			<div class="row justify-content-center">
				<img
					src="./Punto-Icon.webp"
					alt="Punto logo"
				/>
			</div>
			<div class="row justify-content-center">
				<h1
					class="text-center py-4"
					style="font-family: 'Century Gothic Paneuropean'"
				>
					{@html coloredText}
				</h1>
			</div>
			<div class="row justify-content-center">
				<h3 class="text-center">
					<a
						id="newGame"
						href="/newgame"
						data-sveltekit-preload-data="tap"
						style="--hover-color: #007bff;"
						on:mousedown={playClickSound}
					>
						New Game
					</a>
				</h3>
			</div>
			<div class="row justify-content-center display-disabled">
				<h3 class="text-center">
					{#if $doesTheGameExist}
						<a
							id="continue"
							href="/board"
							data-sveltekit-preload-data="tap"
							style="--hover-color: #ffc107;"
							on:mousedown={playClickSound}
						>
							Continue
						</a>
					{:else}
						<span
							data-bs-toggle="tooltip"
							data-placement="right"
							title="There is no active game"
							class:gray={!$doesTheGameExist}
						>
							Continue
						</span>
					{/if}
				</h3>
			</div>
			<div class="row justify-content-center">
				<h3 class="text-center">
					<a
						id="settings"
						href="/settings"
						data-sveltekit-preload-data="tap"
						style="--hover-color: #28a745;"
						on:mousedown={playClickSound}
					>
						Settings
					</a>
				</h3>
			</div>
			<div class="row justify-content-center">
				<h3 class="text-center">
					<a
						id="about"
						href="/about"
						data-sveltekit-preload-data="tap"
						style="--hover-color: #007bff;"
						on:mousedown={playClickSound}
					>
						About
					</a>
				</h3>
			</div>
			<div class="row justify-content-center">
				<h3 class="text-center">
					<a
						id="exit"
						href="https://duckduckgo.com/"
						style="--hover-color: #dc3545;"
						on:mousedown={playClickSound}
					>
						Exit
					</a>
				</h3>
			</div>
		</div>
	</div>
</div>

<style>
	img {
		text-align: center !important;
		display: block !important;
		width: 200px !important;
		height: 200px !important;
		padding: 0%;
		box-shadow:
			0 4px 8px 0 #00000033,
			0 6px 20px 0 #00000030;
		border-radius: 30px;
	}
	.gray {
		color: #464646a6;
		cursor: not-allowed;
	}
	span {
		transition: border 0.2s ease;
	}
	.col-4 {
		background-color: #ffffff96;
		border-radius: 10px;
		padding: 20px;
		width: min(300px, 90%);
		backdrop-filter: blur(5px);
	}
</style>
