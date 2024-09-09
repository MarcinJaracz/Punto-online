<script>
	import { page } from "$app/stores"
	import Return from "$components/return.svelte"
</script>

<div class="conteiner vh-100">
	<div class="d-flex justify-content-center align-items-center h-100">
		<div class="col-2">
			<div class="row justify-content-center">
				<div class="error-frame">
					{#if $page.error}
						<h1>{$page.status}<br />Sorry, Page<br /> {$page.error.message}</h1>
					{:else}
						<h1>Unknown error</h1>
					{/if}
				</div>
			</div>
			<div class="row justify-content-center">
				<Return />
			</div>
		</div>
	</div>
</div>

<style>
	.error-frame {
		text-align: center;
		padding: 10px;
		border-image: linear-gradient(to right, #3acfd5 0%, #3ad544 100%) 1;
		border-radius: 15px;
		border-width: 4px;
		border-style: solid;
		background-color: #ffffff80;
	}
</style>
