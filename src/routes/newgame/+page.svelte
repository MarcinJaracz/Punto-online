<!-- src/routes/newgame -->
<script>
	import Return from "../return.svelte"
</script>

<svelte:head>
	<title>New game</title>
</svelte:head>

<body>
	<div class="container vh-100">
		<div class="d-flex justify-content-center align-items-center h-100">
			<div class="col-4">
				<div class="row justify-content-center">
					<h1 class="text-center">New Game</h1>
				</div>
				<div class="row justify-content-center py-5">
					<div class="d-flex flex-row py-1">
						<div class="col justify-content-center">
							<span class="d-block p-2 bg-primary rounded inline-block text-white position-relative"
								>Choose number of players</span
							>
						</div>
						<div class="col justify-content-center">
							<div
								class="btn-group h-100 w-100"
								role="group"
							>
								<input
									type="radio"
									class="btn-check"
									name="options"
									id="option1"
									autocomplete="off"
									checked
								/>
								<label
									class="btn btn-primary"
									for="option1"><i class="fas fa-person"></i><i class="fas fa-person-dress"></i></label
								>
								<input
									type="radio"
									class="btn-check"
									name="options"
									id="option2"
									autocomplete="off"
								/>
								<label
									class="btn btn-primary"
									for="option2"
									><i class="fas fa-person"></i><i class="fas fa-person-dress"></i><i class="fas fa-person"></i></label
								>
								<input
									type="radio"
									class="btn-check"
									name="options"
									id="option3"
									autocomplete="off"
								/>
								<label
									class="btn btn-primary"
									for="option3"
									><i class="fas fa-person"></i><i class="fas fa-person-dress"></i><i class="fas fa-person"></i><i
										class="fas fa-person-dress"
									></i></label
								>
							</div>
						</div>
					</div>
					<div class="d-flex flex-row py-1">
						<div class="col justify-content-center">
							<span class="d-block p-2 bg-primary rounded inline-block text-white position-relative"
								>Choose how many cards is needed to win</span
							>
						</div>
						<div class="col justify-content-center">
							<div
								class="btn-group h-100 w-100"
								role="group"
							>
								<input
									type="radio"
									class="btn-check"
									name="options2"
									id="option5"
									autocomplete="off"
									checked
								/>
								<label
									class="btn btn-primary centered-label"
									for="option5"
									>5
								</label>
								<input
									type="radio"
									class="btn-check"
									name="options2"
									id="option6"
									autocomplete="off"
								/>
								<label
									class="btn btn-primary centered-label"
									for="option6">6</label
								>
							</div>
						</div>
					</div>
				</div>
				<div class="row justify-content-center py-1">
					<div class="col-10 text-center">
						<a href="/board">
							<btn
								type="button"
								class="btn btn-primary"
								><i class="fa-solid fa-play" />
								Play
							</btn>
						</a>
					</div>
				</div>
				<div class="row justify-content-center">
					<Return />
				</div>
			</div>
		</div>
	</div>
</body>

<style>
	.centered-label {
		display: flex;
		justify-content: center;
		align-items: center;
		height: 100%;
		font-size: 25px;
	}
</style>
