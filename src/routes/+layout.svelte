<script lang="ts">
  import { browser } from '$app/environment';
  import Navigation from '$lib/components/Navigation.svelte';
  import { firebaseAuth } from '$lib/firebase.client';
  import { getAuthStore, setAuth } from '$lib/stores/authStore';
  import { setStores } from '$lib/stores/packinglist';
  import { docHandler, getTrips, setTrips } from '$lib/stores/tripsStore';
  import '$lib/styles.css';
  import { onIdTokenChanged } from 'firebase/auth';

  setAuth();
  setStores();
  setTrips();

  const trips = getTrips();

  if (browser) {
    onIdTokenChanged(firebaseAuth, async (e) => {
      if (e) {
        await docHandler.setTrips(trips);
      } else {
        docHandler.clearTrips(trips);
      }
    });
  }

  const auth = getAuthStore();
</script>

<Navigation></Navigation>
<div class="main-body">
  <slot />
</div>

<style>
  .main-body {
    padding-top: 6rem;
  }
</style>
