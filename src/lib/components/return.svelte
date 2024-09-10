<script>
	import { playClickSound } from "$lib/click"
</script>

<div class="container">
	<div class="nav justify-content-center pt-4">
		<h3>
			<a
				href="/"
				data-bs-toggle="tooltip"
				data-placement="right"
				title="Go back to main page"
				on:mousedown={playClickSound}
			>
				<i class="fa-sharp fa-light fa-circle-arrow-left" /> return
			</a>
		</h3>
	</div>
</div>

<style>
	h3:hover {
		background-color: #dc3545;
		border-radius: 10px;
	}
</style>
