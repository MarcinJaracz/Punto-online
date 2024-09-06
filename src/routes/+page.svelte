<script>
	let activeGame = false
</script>

<body>
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
					<h3 class="text-center">
						<a
							href="/newgame"
							data-sveltekit-preload-data="tap"
							style="border-radius:10px;"
							onmouseover="this.style.backgroundColor='#007bff';"
							onmouseout="this.style.backgroundColor='';"
						>
							New Game
						</a>
					</h3>
				</span>
				<div class="row justify-content-center display-disabled">
					<h3
						class="text-center"
						class:gray={!activeGame}
					>
						{#if activeGame}
							<a
								href="/continue"
								data-sveltekit-preload-data="tap"
								style="border-radius:10px;"
								onmouseover="this.style.backgroundColor='#ffc107';"
								onmouseout="this.style.backgroundColor='';"
							>
								Continue
							</a>
						{:else}
							<span
								data-bs-toggle="tooltip"
								data-placement="right"
								title="There is no active game"
								style="border-radius:10px;"
								onmouseover="this.style.backgroundColor='#ffc107';"
								onmouseout="this.style.backgroundColor='';">Continue</span
							>
						{/if}
					</h3>
				</div>
				<div class="row justify-content-center">
					<h3 class="text-center">
						<a
							href="/about"
							data-sveltekit-preload-data="tap"
							style="border-radius:10px;"
							onmouseover="this.style.backgroundColor='#28a745';"
							onmouseout="this.style.backgroundColor='';"
						>
							About
						</a>
					</h3>
				</div>
				<div class="row justify-content-center">
					<h3 class="text-center">
						<a
							href="https://duckduckgo.com/"
							style="border-radius:10px;"
							onmouseover="this.style.backgroundColor='#dc3545';"
							onmouseout="this.style.backgroundColor='';"
						>
							Exit
						</a>
					</h3>
				</div>
			</div>
		</div>
	</div>
</body>

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
