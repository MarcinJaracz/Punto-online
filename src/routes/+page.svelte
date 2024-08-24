<!-- src/routes/main_page -->

<body>
	<div class="container vh-100">
		<div class="d-flex justify-content-center align-items-center vh-100">
			<div class="col-4">
				<div class="row justify-content-center">
					<!-- svelte-ignore a11y-img-redundant-alt -->
					<img
						src="./Punto-Icon.png"
						alt="Punto logo"
					/>
				</div>
				<div class="row justify-content-center">
					<h1>
						<strong>Punto Online</strong>
					</h1>
				</div>
				<div class="row justify-content-center">
					<h3 class="text-center">
						<a href="/newgame">
							<i class="fa-regular fa-diamonds-4"></i>
							New Game
							<i class="fa-regular fa-diamonds-4"></i>
						</a>
					</h3>
				</div>
				<div class="row justify-content-center">
					<h3 class="text-center">
						<a href="/continue">
							<i class="fa-regular fa-diamonds-4"></i>
							Continue
							<i class="fa-regular fa-diamonds-4"></i>
						</a>
					</h3>
				</div>
				<div class="row justify-content-center">
					<h3 class="text-center">
						<a href="/about"
							><i class="fa-regular fa-diamonds-4"></i>
							About
							<i class="fa-regular fa-diamonds-4"></i>
						</a>
					</h3>
				</div>
				<div class="row justify-content-center">
					<h3 class="text-center">
						<a href="https://duckduckgo.com/">
							<i class="fa-regular fa-diamonds-4"></i>
							Exit
							<i class="fa-regular fa-diamonds-4"></i>
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
</style>
