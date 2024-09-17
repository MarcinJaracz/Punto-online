<script>
	import { playClickSound } from "$lib/click"
</script>

<div
	class="container"
	style="padding: 6px 12px;"
>
	<div class="nav justify-content-center">
		<h3 class="m-0">
			<a
				href="/"
				data-bs-toggle="tooltip"
				data-placement="right"
				title="Go back to main page"
				style="--hover-color: #dc3545;"
				data-sveltekit-preload-data="tap"
				on:mousedown={playClickSound}
			>
				<i class="fa-sharp fa-light fa-circle-arrow-left" /> return
			</a>
		</h3>
	</div>
</div>
