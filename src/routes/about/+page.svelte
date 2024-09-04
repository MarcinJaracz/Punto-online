<script>
	import Return from "$components/return.svelte"
</script>

<svelte:head>
	<title>About Me</title>
</svelte:head>

<body>
	<div class="container vh-100">
		<div class="d-flex justify-content-center align-items-center h-100">
			<div class="col-4">
				<div class="row justify-content-center">
					<img
						src="profilepicture.jpg"
						alt="profile picture"
					/>
				</div>
				<div class="row justify-content-center">
					<h1 class="text-center">About me</h1>
				</div>
				<div class="row justify-content-center">
					<h3 class="text-center">
						<a
							href="https://github.com/MarcinJaracz"
							target="_blank"
						>
							<i class="fa-brands fa-github"></i>
							My GitHub
						</a>
					</h3>
				</div>
				<div class="row justify-content-center">
					<h3 class="text-center">
						<a
							href="https://www.linkedin.com/in/marcin-jaracz/"
							target="_blank"
							><i class="fa-brands fa-linkedin"></i>
							My LinkedIn
						</a>
					</h3>
				</div>
				<div class="row justify-content-center">
					<Return />
				</div>
			</div>
		</div>
	</div>
</body>

<style>
	img {
		text-align: center !important;
		width: 200px !important;
		height: 200px !important;
		display: block !important;
		border-radius: 50% !important;
		padding: 0%;
		box-shadow:
			0 4px 8px 0 rgba(0, 0, 0, 0.2),
			0 6px 20px 0 rgba(0, 0, 0, 0.19);
	}
</style>
