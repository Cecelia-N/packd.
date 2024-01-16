<script lang="ts">
    import type { LayoutData } from './$types';
    import Navigation from '$lib/components/Navigation.svelte'
	import { setStores } from '$lib/stores/packinglist';
    
    export let data: LayoutData;

    setStores();
</script>
<Navigation></Navigation>
<main>
<slot></slot>
</main>


<style>
    main{
        background-image: url('/pretty-globe.png');
        background-size: contain;
        /* background-position: center; */
    }
</style>