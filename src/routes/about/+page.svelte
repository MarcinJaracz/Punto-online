<script>
	import Return from "$components/return.svelte"
	import { playClickSound } from "$lib/click"

	export let data
	const colors = data.colors
	let handleMouseOver = data.handleMouseOver
	let handleMouseOut = data.handleMouseOut
	let handleFocus = data.handleFocus
	let handleBlur = data.handleBlur
</script>

<svelte:head>
	<title>About Me</title>
</svelte:head>

<body>
	<div class="container vh-100">
		<div class="d-flex justify-content-center align-items-center h-100">
			<div class="col-4">
				<div class="row justify-content-center">
					<img
						src="profilepicture.jpg"
						alt="profile picture"
					/>
				</div>
				<div class="row justify-content-center">
					<h1 class="text-center py-3">About me</h1>
				</div>
				<div class="row justify-content-center">
					<h3
						class="text-center"
						on:mousedown={playClickSound}
					>
						<a
							href="https://github.com/MarcinJaracz"
							target="_blank"
							data-bs-toggle="tooltip"
							data-placement="right"
							title="Go visit my Github page"
							style="border-radius:10px;"
							on:mouseover={(e) => handleMouseOver(e, colors.gitHub)}
							on:mouseout={handleMouseOut}
							on:focus={(e) => handleFocus(e, colors.newGame)}
							on:blur={handleBlur}
							tabindex="0"
						>
							<i class="fa-brands fa-github"></i>
							My GitHub
						</a>
					</h3>
				</div>
				<div class="row justify-content-center">
					<h3
						class="text-center"
						on:mousedown={playClickSound}
					>
						<a
							href="https://www.linkedin.com/in/marcin-jaracz/Punto-online"
							target="_blank"
							data-bs-toggle="tooltip"
							data-placement="right"
							title="Check out my LinkedIn profile"
							style="border-radius:10px;"
							on:mouseover={(e) => handleMouseOver(e, colors.linkedIn)}
							on:mouseout={handleMouseOut}
							on:focus={(e) => handleFocus(e, colors.newGame)}
							on:blur={handleBlur}
							tabindex="0"
							><i class="fa-brands fa-linkedin"></i>
							My LinkedIn
						</a>
					</h3>
				</div>
				<div class="row justify-content-center">
					<h3
						class="text-center"
						on:mousedown={playClickSound}
					>
						<a
							href="https://www.gamefactory-games.com/en/spiele/646214"
							target="_blank"
							data-bs-toggle="tooltip"
							data-placement="right"
							title="Visit creator's website"
							style="border-radius:10px;"
							on:mouseover={(e) => handleMouseOver(e, colors.about)}
							on:mouseout={handleMouseOut}
							on:focus={(e) => handleFocus(e, colors.newGame)}
							on:blur={handleBlur}
							tabindex="0"
							><i class="fas fa-dice" /> About the game
						</a>
					</h3>
				</div>
				<div class="row justify-content-center">
					<Return />
				</div>
			</div>
		</div>
	</div>
</body>

<style>
	img {
		text-align: center !important;
		width: 200px !important;
		height: 200px !important;
		display: block !important;
		border-radius: 50% !important;
		padding: 0%;
		box-shadow:
			0 4px 8px 0 rgba(0, 0, 0, 0.2),
			0 6px 20px 0 rgba(0, 0, 0, 0.2);
	}
</style>
