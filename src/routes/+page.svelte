<script>
	import { playClickSound } from "$lib/click"
	import { doesTheGameExist } from "$lib/store.js"

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
					src="./card_head.svg"
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
					class:gray={!$doesTheGameExist}
				>
					{#if $doesTheGameExist}
						<a
							id="continue"
							href="/board"
							data-sveltekit-preload-data="tap"
							style="border-radius:10px;"
							on:mouseover={(e) => handleMouseOver(e, colors.continue)}
							on:mouseout={handleMouseOut}
							on:focus={(e) => handleFocus(e, colors.continue)}
							on:blur={handleBlur}
							on:mousedown={playClickSound}
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
						id="settings"
						href="/settings"
						data-sveltekit-preload-data="tap"
						style="border-radius:10px;"
						on:mouseover={(e) => handleMouseOver(e, colors.settings)}
						on:mouseout={handleMouseOut}
						on:focus={(e) => handleFocus(e, colors.settings)}
						on:blur={handleBlur}
						tabindex="0"
					>
						Settings
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
			0 4px 8px 0 #00000033,
			0 6px 20px 0 #00000030;
		border-radius: 30px;
	}
	.gray {
		color: #7a7a7a00;
		-webkit-text-stroke: 1px #000000;
		cursor: not-allowed;
	}
</style>
