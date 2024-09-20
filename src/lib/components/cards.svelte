<script>
	import { onMount, onDestroy } from "svelte"
	import { dndzone } from "svelte-dnd-action"
	import { flip } from "svelte/animate"

	export let color = null
	let cards = []
	let filteredCards = []
	let controller
	let dragDisabled = false // Allow dragging for flipped cards
	const flipDurationMs = 300

	onMount(() => {
		loadCards()
	})

	onDestroy(() => {
		if (controller) {
			controller.abort()
		}
	})
	async function loadCards() {
		controller = new AbortController()
		const signal = controller.signal

		try {
			const response = await fetch("/cards.json", { signal })
			if (response.ok) {
				let allCards = await response.json()
				cards = allCards.map((card) => ({
					...card,
					top: 0,
					left: 0,
				}))
				shuffle(cards)
				filterCards()
			} else {
				console.error("Failed to load cards:", response.statusText)
			}
		} catch (error) {
			if (error.name === "AbortError") {
				console.log("Fetch aborted")
			} else {
				console.error("Error loading cards:", error)
			}
		}
	}

	function filterCards() {
		if (color === null) {
			filteredCards = cards
		} else {
			filteredCards = cards.filter((card) => card.color === color)
		}
	}

	function getBackgroundPosition(card) {
		const x = card.position.col * 100
		const y = card.position.row * 100
		return `-${x}px -${y}px`
	}

	function shuffle(array) {
		for (let i = array.length - 1; i > 0; i--) {
			const j = Math.floor(Math.random() * (i + 1))
			;[array[i], array[j]] = [array[j], array[i]]
		}
	}

	$: {
		filterCards()
	}
</script>

<!-- Container for dragging cards -->
<div
	class="cards-container"
	use:dndzone={{ items: filteredCards.filter((card) => !card.dragLocked), dragDisabled }}
>
	{#each filteredCards as card, i (card.name)}
		<div
			class="flip-card"
			draggable={!card.flipped && !card.dragLocked}
			on:click={() => (card.flipped = !card.flipped)}
			animate:flip={{ duration: flipDurationMs }}
			style="transform: translate({card.left}px, {card.top}px); z-index: {filteredCards.length - i};"
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
		position: relative;
		width: 100%;
		height: 100%;
	}

	.flip-card {
		position: absolute;
		width: 100px;
		height: 100px;
		perspective: 1000px;
		cursor: grab;
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
