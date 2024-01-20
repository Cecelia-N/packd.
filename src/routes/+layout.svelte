<script lang="ts">
    import type { LayoutData } from './$types';
    import Navigation from '$lib/components/Navigation.svelte'
	import { setStores } from '$lib/stores/packinglist';
	import { getAuthStore, setAuth } from '$lib/stores/authStore';
	import Auth from '$lib/components/Auth.svelte';
    
    export let data: LayoutData;

    setAuth();
    setStores();

    const auth = getAuthStore();
</script>
<Navigation></Navigation>
<main >
    <!-- {JSON.stringify($auth)} -->
{#if typeof $auth === undefined}
    <p>Loading...</p>
{:else}
    {#if $auth}
        <!-- If the user is logged in, show site content -->
        <slot></slot>
    {:else}
        <!-- Else, login -->
        <Auth />
    {/if}
{/if}
</main>


<style>

</style>