<script lang="ts">
    import Navigation from '$lib/components/Navigation.svelte'
	import { setStores } from '$lib/stores/packinglist';
	import { getAuthStore, setAuth } from '$lib/stores/authStore';
    

    setAuth();
    setStores();

    const auth = getAuthStore();
</script>
<Navigation></Navigation>

<slot/>


<style>

</style>