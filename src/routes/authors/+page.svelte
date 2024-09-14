<script>
	import Return from "$components/return.svelte"
</script>

<body>
	<div class="container">
		<div class="d-flex justify-content-center align-items-center mt-3">
			<div class="col-8">
				<div class="row justify-content-center">
					<div class="mb-4">
						<div>
							<img
								src="punto-box.png"
								alt="punto-box"
								width="392px"
								height="432px"
							/>
						</div>
						<h3 class="text-center mb-3">Description</h3>

						<p>
							<i class="fas fa-quote-left" />
							PUNTO sums it up: minimum rules, maximum fun. Cleverness and luck will bring you victory. Reveal a card of your color,
							place it next to an existing card. If a card on the table shows less points, you can cover it up. If you get 4 of
							your own color in a row, you win the round. <i class="fas fa-quote-right" />
							<a
								href="https://www.gamefactory-games.com/en/spiele/646214"
								target="_blank"
							>
								~gamefactory-games.com
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
			</div>
		</div>
		<Return />
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
</style>
