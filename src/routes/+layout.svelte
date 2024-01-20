<script lang="ts">
    import type { LayoutData } from './$types';
    import Navigation from '$lib/components/Navigation.svelte'
	import { setStores } from '$lib/stores/packinglist';
	import { getAuthStore, setAuth } from '$lib/stores/authStore';
	import Auth from '$lib/components/Auth.svelte';
    

    setAuth();
    setStores();

    const auth = getAuthStore();
</script>
<Navigation></Navigation>
<main >

    <slot></slot>

</main>


<style>

</style>