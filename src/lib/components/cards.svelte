<script>
	import { onMount } from "svelte"
	export let numColumns = 18
	export let numRows = 4
	export let cardWidth = 100
	export let cardHeight = 100
	export let cardsDataUrl = "/cards.json"

	let cards = []

	async function loadCards() {
		const response = await fetch(cardsDataUrl)
		if (response.ok) {
			const allCards = await response.json()
			cards = allCards
		}
	}

	onMount(() => {
		loadCards()
	})

	function getBackgroundPosition(index) {
		const row = Math.floor(index / numColumns)
		const col = index % numColumns
		const x = col * cardWidth
		const y = row * cardHeight
		return `-${x}px -${y}px`
	}

	function flipCard(card) {
		card.flipped = !card.flipped
		cards = [...cards]
	}
</script>

<div class="cards-container justify-content-center">
	{#each cards as card, index}
		<div
			class="flip-card"
			on:click={() => flipCard(card)}
		>
			<div class="flip-card-inner {card.flipped ? 'flipped' : ''}">
				<div
					class="flip-card-front"
					style="background-position: {getBackgroundPosition(index)};"
				></div>
				<div class="flip-card-back"></div>
			</div>
		</div>
	{/each}
</div>

<style>
	.cards-container {
		margin-top: 100px;
		display: grid;
		grid-template-columns: repeat(var(--columns, 9), 100px);
		gap: 10px;
	}

	.flip-card {
		width: 100px;
		height: 100px;
		perspective: 1000px;
	}

	.flip-card-inner {
		position: relative;
		width: 100%;
		height: 100%;
		transition: transform 0.6s;
		transform-style: preserve-3d;
	}

	.flipped {
		transform: rotateY(180deg);
	}

	.flip-card-front,
	.flip-card-back {
		position: absolute;
		width: 100px;
		height: 100px;
		backface-visibility: hidden;
		border-radius: 10px;
	}

	.flip-card-front {
		background-image: url("/all-cards.webp");
		background-size: 900px 400px;
	}

	.flip-card-back {
		background-image: url("/Punto-Icon.webp");
		background-size: cover;
		transform: rotateY(180deg);
	}
</style>
