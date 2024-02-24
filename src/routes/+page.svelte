<script>
	import { goto } from "$app/navigation";
	import Globe from "$lib/components/assets/Globe.svelte";
	import Passport from "$lib/components/assets/Passport.svelte";

</script>
<section class="home-passport">
  <Passport />
  <div>
    <h1>packd.</h1>
    <h2>Your personal supercharged packing list.</h2>
  </div>
  <Globe/>
  <button class="btn-cta" type='button' on:click={() => goto('/trip-details')}>get started</button>
</section>
<style>
  .home-passport {
    display: grid;
    margin: 0 auto;
    justify-items: center;
    text-align: center;
    padding:1.5rem;
    position: relative;
    width: 80%;
    max-width: 600px;
  }
</style>