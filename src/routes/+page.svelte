<script>
	import { playClickSound } from "$lib/click"
	import { doesTheGameExist } from "$lib/store.js"
	import { colorHead } from "$lib/coloredtext"

	const coloredText = colorHead("Punto Online")
</script>

<svelte:head>
	<title>Punto Online</title>
</svelte:head>

<div class="container d-flex justify-content-center align-items-center">
	<div class="col-5 justify-content-center align-items-center my-3">
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
						>Continue
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

<style>
	h3 a#continue {
		color: #000000;
		animation: highlight 2.25s infinite ease-in-out;
		animation-delay: calc((var(--index) - 6) * 0.225s);
		display: inline-block;
	}
	@keyframes highlight {
		50% {
			background-color: #ffc107;
		}
	}
	img {
		display: flex;
		justify-content: center;
		align-items: center;
		width: 200px;
		height: 200px;
		max-width: 100%;
		max-height: 100%;
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
	.col-5 {
		padding: 20px;
		transform: translate(0, 0%);
		margin-top: 20px;
		width: min(300px, 90%);
		backdrop-filter: blur(5px);
		background-color: #ffffff96;
		border-radius: 10px;
		border-top: 1px solid rgba(255, 255, 255, 0.4);
		border-left: 1px solid rgba(255, 255, 255, 0.4);
		box-shadow: 3px 3px 3px rgba(0, 0, 0, 0.3);
	}
</style>
