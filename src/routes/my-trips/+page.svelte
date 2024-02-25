<script lang="ts">
  import { goto } from '$app/navigation';
  import AddBtn from '$lib/components/UI/AddBtn.svelte';
  import { docHandler } from '$lib/stores/tripsStore';

  const trips = docHandler.getAllTrips();
  function newTrip() {
    goto('/my-trips/new-trip');
  }
</script>

<section class="bg-coral">
  <h1>my trips</h1>
  {#await trips}
    <p>getting trips...</p>
  {:then trips}
    {#if trips}
      {#each trips as trip}
        <button
          type="button"
          class="trip"
          on:click={() => {
            goto(`/my-trips/${trip}`);
          }}
        >
          <h2>{trip.name ?? 'Untitled trip'}</h2>
          <p>
            {new Date(trip?.startDate).toLocaleDateString('en-us', { dateStyle: 'long' })} till {new Date(
              trip?.endDate
            ).toLocaleDateString('en-us', { dateStyle: 'long' })}
          </p>
        </button>
      {/each}
    {:else}
      <p>No trips found... add one now!</p>
    {/if}
  {/await}
  <AddBtn text="new trip" onClick={newTrip} />
</section>

<style>
  .trip {
    width: 100%;
    background-color: var(--dark-coral);
    padding: 0.6rem;
    border: 1px solid var(--dark-coral);
    border-radius: 1rem;
    box-shadow: -3px 2px 5px var(--shadow);
    margin-bottom: 1rem;
  }
</style>
