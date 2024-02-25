<script lang="ts">
  import { goto, invalidate } from '$app/navigation';
  import AddBtn from '$lib/components/UI/AddBtn.svelte';
  import DeleteBtn from '$lib/components/UI/DeleteBtn.svelte';
  import { docHandler, tripHandler } from '$lib/stores/tripsStore';

  const trips = docHandler.getAllTrips();
  function newTrip() {
    goto('/my-trips/new-trip');
  }
  async function deleteTrip(tripId: string) {
    // TODO: Implement a modal that asks if the user is sure they want to delete the trip.
    await tripHandler.deleteTrip(tripId);
    alert('trip deleted');
    invalidate('/my-trips');
  }
</script>

<section class="bg-coral">
  <h1>my trips</h1>
  {#await trips}
    <p>getting trips...</p>
  {:then trips}
    {#if trips}
      {#each trips.entries() as trip}
        <div class="trip">
          <div>
            <button
              type="button"
              on:click={() => {
                goto(`/my-trips/${trip[0]}`);
              }}
            >
              <h2>{trip[1].name ?? 'Untitled trip'}</h2>
              {#if trip[1].startDate && trip[1]?.endDate}
                <p>
                  {new Date(trip[1].startDate).toLocaleDateString('en-us', { dateStyle: 'long' })} till
                  {new Date(trip[1].endDate).toLocaleDateString('en-us', { dateStyle: 'long' })}
                </p>
              {/if}
            </button>
          </div>
          <div class="options">
            <DeleteBtn
              onClick={() => {
                deleteTrip(trip[0]);
              }}
            />
          </div>
        </div>
      {/each}
    {:else}
      <p>No trips found... add one now!</p>
    {/if}
  {/await}
  <AddBtn text="new trip" onClick={newTrip} />
</section>

<style>
  .trip {
    display: grid;
    grid-template-columns: 0.8fr 0.2fr;
    align-items: center;
    background-color: var(--dark-coral);
    padding: 0.6rem;
    border: 1px solid var(--dark-coral);
    border-radius: 1rem;
    box-shadow: -3px 2px 5px var(--shadow);
    margin-bottom: 1rem;
  }
  .options {
    justify-self: end;
  }

  button {
    background-color: transparent;
    border: none;
  }
</style>
