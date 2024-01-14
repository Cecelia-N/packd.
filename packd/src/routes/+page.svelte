<script>

	import { goto } from "$app/navigation";

</script>
<main>
<section>
    <h1>Packd.</h1>
    <h2>Your personal supercharged packing list.</h2>

    <button class="btn-cta" type='button' on:click={() => goto('/trip-details')}>Get started</button>
</section>
</main>
<style>
    main{
        height: 100vh;
        padding: 1rem;
    }
    section{
        display: flex;
        flex-direction:column;
        background-image: url('Passport.png');
        background-size: contain;
        background-position: center;
        background-repeat: no-repeat;
        align-content: center;
        align-self: center;
        min-width: 80%;
        height: 150%;
        margin: 0 auto;
        padding: 3rem;
    }

    h1, h2 {
        text-align: center;
    }
    h2 {
        padding-left: 4rem;
        padding-right: 4rem;
    }
    h1{
        margin-top: 0;
    }

    .btn-cta {
        align-self: center;
    }
</style>