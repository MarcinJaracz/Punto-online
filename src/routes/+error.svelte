<script>
	import { page } from "$app/stores"
	import Return from "$components/return.svelte"
</script>

<div class="conteiner">
	<div class="row justify-content-center pt-3">
		<div class="error-frame">
			{#if $page.error}
				<h1>{$page.status}<br />Sorry, Page<br /> {$page.error.message}</h1>
			{:else}
				<h1>Unknown error</h1>
			{/if}
		</div>
	</div>
	<div class="pt-3">
		<Return />
	</div>
</div>

<style>
	.error-frame {
		margin-top: 10%;
		text-align: center;
		background-color: #ffffff96;
		border-radius: 10px;
		padding: 20px;
		width: min(300px, 60%);
		backdrop-filter: blur(5px);
	}
</style>
