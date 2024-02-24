<script lang="ts">
    import Navigation from '$lib/components/Navigation.svelte'
	import { setStores } from '$lib/stores/packinglist';
	import { getAuthStore, setAuth } from '$lib/stores/authStore';
    import '$lib/styles.css'

    setAuth();
    setStores();

    const auth = getAuthStore();
</script>
<Navigation></Navigation>
<div class="main-body">
<slot/>
</div>

<style>
  .main-body {
    padding-top: 6rem;
  }
</style>