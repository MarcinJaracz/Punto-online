<script>
	import { playClickSound } from "$lib/click"

	let activeGame = true
	export let data
	const colors = data.colors
	let handleMouseOver = data.handleMouseOver
	let handleMouseOut = data.handleMouseOut
	let handleFocus = data.handleFocus
	let handleBlur = data.handleBlur
</script>

<div class="container vh-100">
	<div class="d-flex justify-content-center align-items-center vh-100">
		<div class="col-4">
			<div class="row justify-content-center">
				<img
					src="./Punto-Icon.png"
					alt="Punto logo"
				/>
			</div>
			<div class="row justify-content-center">
				<h1 class="text-center py-4">
					<strong>Punto Online</strong>
				</h1>
			</div>
			<span class="row justify-content-center">
				<h3
					class="text-center"
					on:mousedown={playClickSound}
				>
					<a
						id="newGame"
						href="/newgame"
						data-sveltekit-preload-data="tap"
						style="border-radius:10px;"
						on:mouseover={(e) => handleMouseOver(e, colors.newGame)}
						on:mouseout={handleMouseOut}
						on:focus={(e) => handleFocus(e, colors.newGame)}
						on:blur={handleBlur}
						tabindex="0"
					>
						New Game
					</a>
				</h3>
			</span>
			<div class="row justify-content-center display-disabled">
				<h3
					class="text-center"
					class:gray={!activeGame}
					on:mousedown={playClickSound}
				>
					{#if activeGame}
						<a
							id="continue"
							href="/board"
							data-sveltekit-preload-data="tap"
							style="border-radius:10px;"
							on:mouseover={(e) => handleMouseOver(e, colors.continue)}
							on:mouseout={handleMouseOut}
							on:focus={(e) => handleFocus(e, colors.continue)}
							on:blur={handleBlur}
							tabindex="0"
						>
							Continue
						</a>
					{:else}
						<span
							data-bs-toggle="tooltip"
							data-placement="right"
							title="There is no active game"
						>
							Continue
						</span>
					{/if}
				</h3>
			</div>
			<div class="row justify-content-center">
				<h3
					class="text-center"
					on:mousedown={playClickSound}
				>
					<a
						id="about"
						href="/about"
						data-sveltekit-preload-data="tap"
						style="border-radius:10px;"
						on:mouseover={(e) => handleMouseOver(e, colors.about)}
						on:mouseout={handleMouseOut}
						on:focus={(e) => handleFocus(e, colors.about)}
						on:blur={handleBlur}
						tabindex="0"
					>
						About
					</a>
				</h3>
			</div>
			<div class="row justify-content-center">
				<h3
					class="text-center"
					on:mousedown={playClickSound}
				>
					<a
						id="exit"
						href="https://duckduckgo.com/"
						style="border-radius:10px;"
						on:mouseover={(e) => handleMouseOver(e, colors.exit)}
						on:mouseout={handleMouseOut}
						on:focus={(e) => handleFocus(e, colors.exit)}
						on:blur={handleBlur}
						tabindex="0"
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
			0 4px 8px 0 rgba(0, 0, 0, 0.2),
			0 6px 20px 0 rgba(0, 0, 0, 0.19);
		border-radius: 30px;
	}
	.gray {
		color: rgba(122, 122, 122, 0);
		-webkit-text-stroke: 1px rgb(0, 0, 0);
		cursor: not-allowed;
	}
</style>
