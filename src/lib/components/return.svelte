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
				style="border-radius:10px;"
				onmouseover="this.style.backgroundColor='#dc3545';"
				onmouseout="this.style.backgroundColor='';"
				on:mousedown={playClickSound}
			>
				<i class="fa-sharp fa-light fa-circle-arrow-left" /> return
			</a>
		</h3>
	</div>
</div>
