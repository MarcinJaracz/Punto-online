<!-- src/routes/aboutme -->
<script>
	import Return from "../return.svelte"
</script>

<div class="content">
	<!-- svelte-ignore a11y-img-redundant-alt -->
	<img
		src="profilepicture.jpg"
		alt="profile picture"
	/>

	<span>
		<h1>About me</h1>
		<h3>
			<a
				href="https://github.com/MarcinJaracz"
				target="_blank"
			>
				<i class="fa-brands fa-github"></i>
				My GitHub
			</a>
		</h3>
		<h3>
			<a
				href="https://www.linkedin.com/in/marcin-jaracz/"
				target="_blank"
				><i class="fa-brands fa-linkedin"></i>
				My LinkedIn
			</a>
		</h3>
		<Return />
	</span>
</div>

<style>
	img {
		width: 200px !important;
		height: 200px !important;
		display: block !important;
		margin: auto !important;
		margin-top: 100px !important;
		border-radius: 50% !important;
		box-shadow:
			0 4px 8px 0 rgba(0, 0, 0, 0.2),
			0 6px 20px 0 rgba(0, 0, 0, 0.19);
	}
</style>
