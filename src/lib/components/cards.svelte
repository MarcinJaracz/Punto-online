<script>
	import { onMount } from "svelte"

	export let color = null

	let cards = []
	let filteredCards = []

	onMount(() => {
		loadCards()
	})

	async function loadCards() {
		try {
			const response = await fetch("/cards.json")
			if (response.ok) {
				let allCards = await response.json()
				cards = allCards
				filterCards() // Filter cards after loading
			} else {
				console.error("Failed to load cards:", response.statusText)
			}
		} catch (error) {
			console.error("Error loading cards:", error)
		}
	}

	function getBackgroundPosition(card) {
		const x = card.position.col * 100
		const y = card.position.row * 100
		return `-${x}px -${y}px`
	}

	function flipCard(card) {
		// console.log(`Flipping card: ${card.name} | Current flipped state: ${card.flipped}`) // Debug log to check if flipCard is called
		const updatedCards = cards.map((c) => (c.name === card.name ? { ...c, flipped: !c.flipped } : c))
		cards = updatedCards

		filterCards()
	}

	function filterCards() {
		if (color === null) {
			filteredCards = cards
		} else {
			filteredCards = cards.filter((card) => card.color === color)
		}
	}

	$: {
		filterCards()
		// console.log("Filtered Cards:", filteredCards) // Debug output
	}
</script>

<div class="cards-container">
	{#each filteredCards as card}
		<div
			class="flip-card"
			on:click={() => flipCard(card)}
		>
			<div class="flip-card-inner {card.flipped ? 'flipped' : ''}">
				<div
					class="flip-card-front"
					style="background-position: {getBackgroundPosition(card)};"
				></div>
				<div class="flip-card-back"></div>
			</div>
		</div>
	{/each}
</div>

<style>
	.cards-container {
		display: grid;
		grid-template-columns: repeat(9, 100px);
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
