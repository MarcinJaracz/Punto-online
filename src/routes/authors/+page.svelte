<script>
	import Return from "$components/return.svelte"
</script>

<svelte:head>
	<title>About the project</title>
</svelte:head>

<body>
	<div class="container">
		<div class="d-flex justify-content-center align-items-center my-3">
			<div class="col-8">
				<div class="row justify-content-center">
					<div class="mb-4">
						<div>
							<h3 class="text-center mb-3">Description</h3>
							<img
								src="punto-box.webp"
								alt="punto-box"
								width="251px"
								height="277px"
							/>
						</div>
						<p>
							<i class="fas fa-quote-left" />
							PUNTO sums it up: minimum rules, maximum fun. Cleverness and luck will bring you victory. Reveal a card of your color,
							place it next to an existing card. If a card on the table shows less points, you can cover it up. If you get 4 of
							your own color in a row, you win the round. <i class="fas fa-quote-right" />
							<a
								href="https://www.gamefactory-games.com/en/spiele/646214"
								target="_blank"
								><span> ~gamefactory-games.com</span>
							</a>
						</p>
					</div>
					<div class="mb-4">
						<h3 class="text-center mb-3">About the project</h3>
						<p>
							&emsp;This project includes images and graphics to which I do not hold any rights. All visual elements are used
							solely for illustrative purposes, and no claim is made to their ownership. The project is purely a fun and
							experimental coding exercise, created for personal learning and development. The idea behind the card game
							itself is also not my original concept and is used as inspiration for the technical aspects of this project. No
							commercial use or distribution is intended.
						</p>
					</div>
					<div class="text-center justify-content-center">
						<h3 class="text-center mb-3">Authors</h3>
						<table>
							<tr>
								<td>Author:</td>
								<td>Bernhard Weber</td>
							</tr>
							<tr>
								<td>Graphics:</td>
								<td>Nadine Hauser</td>
							</tr>
							<tr
								><td>Online app:</td>
								<td>Marcin Jaracz</td>
							</tr>
						</table>
					</div>
				</div>
				<div class="nav justify-content-center pt-4">
					<Return />
				</div>
			</div>
		</div>
	</div>
</body>

<style>
	img {
		float: left;
		margin-right: 15px;
		margin-top: 5px;
		filter: drop-shadow(4px 4px 6px rgba(0, 0, 0, 0.821));
	}
	h3 {
		margin-bottom: 0px;
	}
	p {
		text-align: justify;
		font-size: larger;
		padding-top: 0%;
	}
	.col-8 {
		background-color: #ffffff96;
		border-radius: 10px;
		padding: 20px;
		width: min(850px, 90%);
		backdrop-filter: blur(5px);
		border-top: 1px solid rgba(255, 255, 255, 0.4);
		border-left: 1px solid rgba(255, 255, 255, 0.4);
		box-shadow: 3px 3px 3px rgba(0, 0, 0, 0.3);
	}
	a {
		font-style: italic;
		font-size: normal;
		padding: 0px;
		margin: 0px;
	}
	a:hover {
		color: blue;
	}
	table {
		margin: 0 auto;
	}
	td:first-child {
		text-align: right;
		font-size: larger;
	}
	td:last-child {
		text-align: left;
		padding-left: 10px;
		font-size: larger;
	}
	span {
		background: linear-gradient(to right, #dc3545, #007bff, #ffc107, #28a745);
		background-clip: text;
		color: transparent;
	}
</style>
