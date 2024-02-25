<script lang="ts">
  import AddBtn from '$lib/components/UI/AddBtn.svelte';
  import type { PageData } from './$types';

  export let data: PageData;
  const trip = data.trip;
</script>

<section class="bg-coral">
  {#if trip}
    <h1>{trip.name}</h1>
    <p>Start: {trip.startDate}</p>
    <p>End: {trip.endDate}</p>
    <AddBtn text="create packing list" onClick={() => {}} />
  {:else}
    <p>could not find trip</p>
  {/if}
</section>
