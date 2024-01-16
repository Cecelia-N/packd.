<script>

	import { goto } from "$app/navigation";

</script>
<main>
<section>
    <h1>packd.</h1>
    <h2>Your personal supercharged packing list.</h2>

    <button class="btn-cta" type='button' on:click={() => goto('/trip-details')}>get started</button>
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
        min-width: 80%;
        height: 100vh;
        margin: 0 auto;
        padding: 3rem;
    }

    h1, h2 {
        text-align: center;
    }

    h1{
        margin-top: 4;
        font-size: 3rem;
    }

    .btn-cta {
        align-self: center;
    }
</style>