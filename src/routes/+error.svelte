<script>
	import { page } from '$app/stores';
</script>

<div class="conteiner">
    {#if $page.error}
        <h1>{$page.status}<br>Sorry, Page<br> {$page.error.message}</h1>
    {:else}
        <h1>Unknown error</h1>
    {/if}
</div>
<div class="backHome">
    <h4><a href="/">Click here<br> to come back home</a></h4>
</div>

<style>
    h1 {
        margin: 0;
        text-align: center;
        padding: 40px;
    }
    .backHome {
        position: absolute;
        left: 50%; 
        bottom: 10%; 
        transform: translateX(-50%); 
        text-align: center;
        padding: 10px;
    }
    .conteiner {
        width: fit-content;
        margin: auto;
        text-align: center;
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        border-image: linear-gradient(to right, #3acfd5 0%, #3ad544 100%) 1;
        border-radius: 15px;
        border-width: 4px;
        border-style: solid;
        background-color: rgba(255, 255, 255, 0.5);
    }
</style>