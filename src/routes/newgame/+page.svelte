<!-- src/routes/newgame -->
<script>
	import Return from "../return.svelte"
</script>

<body>
	<div class="container vh-100">
		<div class="d-flex justify-content-center align-items-center h-100">
			<div class="col-4">
				<div class="row justify-content-center">
					<h1 class="text-center">New Game</h1>
				</div>
				<div class="row justify-content-center py-5">
					<div class="d-flex flex-row">
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
								/>
								<label
									class="btn btn-primary"
									for="option1">two</label
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
									for="option2">three</label
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
									for="option3">four</label
								>
							</div>
						</div>
					</div>
				</div>
				<div class="row justify-content-center">
					<Return />
				</div>
			</div>
		</div>
	</div>
</body>
