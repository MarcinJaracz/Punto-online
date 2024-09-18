<script>
	/** @type {import('./$types').LayoutData} */
	import "bootstrap/dist/css/bootstrap.min.css"
</script>

<main>
	<slot />
</main>

<svelte:head>
	<meta
		name="description"
		content="This is an online verison of a card game called Punto, designed by Game Factory"
	/>
	<link
		href="/font-awesome/css/all.min.css"
		rel="stylesheet"
	/>
	<link
		href="/font-awesome/css/fontawesome.min.css"
		rel="stylesheet"
	/>
</svelte:head>

<style>
	:global(body) {
		width: 100%;
		height: 100%;
		display: grid;
		background-image: url("/background.webp");
		background-color: #ffffff66 !important;
		background-repeat: no-repeat !important;
		background-attachment: fixed !important;
		background-size: cover !important;
		background-blend-mode: lighten !important;
		background-position: center;
	}
	:global(a) {
		display: inline-block;
		text-decoration: none;
		color: inherit;
		transition: background-color 0.3s ease;
		border-radius: 10px;
		padding: 5px 10px;
	}
	:global(a:hover) {
		background-color: var(--hover-color);
	}
	:global(html body) {
		color: inherit !important;
		text-decoration: inherit !important;
	}
	:global(h1) {
		cursor: default;
	}
	@font-face {
		font-family: "Century Gothic Paneuropean";
		src: url("/fonts/century-gothic-paneuropean/CenturyGothicPaneuropeanExtraBold.ttf") format("truetype");
		font-weight: normal;
		font-style: normal;
	}
</style>
