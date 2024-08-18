<!-- src/routes/+layout.svelte -->

<slot></slot>

<script>
    /** @type {import('./$types').LayoutData} */
    import 'bootstrap/dist/css/bootstrap.min.css';
</script>

<svelte:head>
    <link href="/font-awesome/css/all.min.css" rel='stylesheet'>
	<link href="/font-awesome/css/fontawesome.min.css" rel='stylesheet'>
</svelte:head>


<style>
    :global(span.main_menu) {
        margin: 0;
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        text-align: center;
    }
    :global(span) {
        margin: 0;
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        text-align: center;
    }
    :global(body) {
        background-image: url('background.jpg') !important;
        background-color: rgba(255, 255, 255, 0.4) !important;
        background-repeat: no-repeat !important;
        background-attachment: fixed !important;
        background-size: cover !important;
        background-blend-mode: lighten !important;
    }
    :global(a) {
        color: inherit !important; 
        text-decoration: inherit !important; 
    }
    :global(html body a) {
        color: inherit !important; 
        text-decoration: inherit !important; 
    }
    :global(h1) {
        padding-bottom: 20px;
    }
</style>