<script>
	import { playClickSound } from "$lib/click"
	import { doesTheGameExist } from "$lib/store.js"

	const text = "Punto Online"
	const colors = ["#dc3545", "#007bff", "#ffc107", "#28a745"]
	let letters = text.split("")
</script>

<div class="container vh-100">
	<div class="d-flex justify-content-center align-items-center vh-100">
		<div class="col-4">
			<div class="row justify-content-center">
				<img
					src="./card_head.svg"
					alt="Punto logo"
				/>
			</div>
			<div class="row justify-content-center">
				<h1
					class="text-center py-4"
					style="font-family: 'Century Gothic Paneuropean'"
				>
					<strong>
						{#each letters as letter, index}
							<span style="color: {colors[index % colors.length]}; text-shadow: 4px 4px 4px rgba(0, 0, 0, 0.7);"
								>{letter}</span
							>
						{/each}
					</strong>
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
				<h3
					class="text-center"
					class:gray={!$doesTheGameExist}
				>
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
						<div
							data-bs-toggle="tooltip"
							data-placement="right"
							title="There is no active game"
						>
							Continue
						</div>
					{/if}
				</h3>
			</div>
			<div class="row justify-content-center">
				<h3 class="text-center">
					<a
						id="about"
						href="/about"
						data-sveltekit-preload-data="tap"
						style="--hover-color: #28a745;"
						on:mousedown={playClickSound}
					>
						About
					</a>
				</h3>
			</div>
			<div class="row justify-content-center">
				<h3 class="text-center">
					<a
						id="settings"
						href="/settings"
						data-sveltekit-preload-data="tap"
						style="--hover-color: #007bff;"
						on:mousedown={playClickSound}
					>
						Settings
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
		/* FIXME Find out why image shrinks after changing the window size */
	}
	.gray {
		color: #7a7a7a00;
		-webkit-text-stroke: 1px #000000;
		cursor: not-allowed;
	}
</style>
