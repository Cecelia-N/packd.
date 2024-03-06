<script>
  import RangeCalendar from './../lib/components/UI/melt/RangeCalendar.svelte';
  import { goto } from '$app/navigation';
  import DateRangeField from '$lib/components/UI/melt/DateRangeField.svelte';
  import Globe from '$lib/components/assets/Globe.svelte';
  import Passport from '$lib/components/assets/Passport.svelte';
</script>

<section class="home-passport">
  <Passport />
  <div>
    <h1>packd.</h1>
    <h2>Your personal supercharged packing list.</h2>
  </div>
  <Globe />
  <button class="btn-cta" type="button" on:click={() => goto('/trip-details')}>get started</button>
  <button class="btn-cta"><a href="/melt">test ui</a></button>
</section>

<style>
  .home-passport {
    display: grid;
    margin: 0 auto;
    justify-items: center;
    text-align: center;
    padding: 1.5rem;
    position: relative;
    width: 80%;
    max-width: 600px;
  }
</style>
