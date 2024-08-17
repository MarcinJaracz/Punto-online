<body>
    <span>
        <h1>New Game page</h1>
        <a href="/"><h3><i class="fa-sharp fa-regular fa-arrow-left-long"></i> cofnij</h3></a>
    </span>    
</body>

<script>
    import 'bootstrap/dist/css/bootstrap.min.css';
</script>

<svelte:head>
    <link href="/font-awesome/css/all.min.css" rel='stylesheet'>
	<link href="/font-awesome/css/fontawesome.min.css" rel='stylesheet'>
</svelte:head>

<style>
    span {
        margin: 0;
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        text-align: center;
    }
    body {
        background-image: url('background.jpg');
        background-color: rgba(255, 255, 255, 0.4);
        background-repeat: no-repeat;
        background-attachment: fixed;
        background-size: cover;
        background-blend-mode: lighten;
    }
    a {
        color: inherit;
        text-decoration: inherit;
    }
</style>