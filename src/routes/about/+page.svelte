<script>
	import Return from "$components/return.svelte"
	import { playClickSound } from "$lib/click"
	import { colorHead } from "$lib/coloredtext"

	const coloredText = colorHead("About me")
</script>

<svelte:head>
	<title>About Me</title>
</svelte:head>

<body>
	<div class="container">
		<div class="d-flex justify-content-center align-items-center h-100">
			<div class="col-4 my-3">
				<div class="row justify-content-center">
					<img
						src="profilepicture.webp"
						alt="profile picture"
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
							href="https://github.com/MarcinJaracz"
							style="--hover-color: #007bff;"
							target="_blank"
							data-bs-toggle="tooltip"
							data-placement="right"
							title="Go visit my Github page"
							on:mousedown={playClickSound}
						>
							<i class="fa-brands fa-github"></i>
							My GitHub
						</a>
					</h3>
				</div>
				<div class="row justify-content-center">
					<h3 class="text-center">
						<a
							href="https://www.linkedin.com/in/marcin-jaracz/Punto-online"
							style="--hover-color: #ffc107;"
							target="_blank"
							data-bs-toggle="tooltip"
							data-placement="right"
							title="Check out my LinkedIn profile"
							on:mousedown={playClickSound}
							><i class="fa-brands fa-linkedin"></i>
							My LinkedIn
						</a>
					</h3>
				</div>
				<div class="row justify-content-center">
					<h3 class="text-center">
						<a
							href="https://www.gamefactory-games.com/en/spiele/646214"
							style="--hover-color: #28a745;"
							target="_blank"
							data-bs-toggle="tooltip"
							data-placement="right"
							title="Visit creator's website"
							on:mousedown={playClickSound}
							><i class="fas fa-dice" /> About the game
						</a>
					</h3>
				</div>
				<div class="row justify-content-center">
					<h3 class="text-center">
						<a
							href="/authors"
							style="--hover-color: #dc3545;"
							on:mousedown={playClickSound}
						>
							<i class="fa-regular fa-users"></i> About the authors
						</a>
					</h3>
				</div>
				<div class="row justify-content-center pt-3">
					<Return />
				</div>
			</div>
		</div>
	</div>
</body>

<style>
	.col-4 {
		background-color: #ffffff96;
		border-radius: 10px;
		padding: 20px;
		width: min(400px, 90%);
		transform: translate(0, 0%);
		backdrop-filter: blur(5px);
		border-top: 1px solid rgba(255, 255, 255, 0.4);
		border-left: 1px solid rgba(255, 255, 255, 0.4);
		box-shadow: 3px 3px 3px rgba(0, 0, 0, 0.3);
	}
	img {
		text-align: center !important;
		width: 200px !important;
		height: 200px !important;
		display: block !important;
		border-radius: 50% !important;
		padding: 0%;
		box-shadow:
			0 4px 8px 0 #00000033,
			0 6px 20px 0 #00000033;
	}
</style>
