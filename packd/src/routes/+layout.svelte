<script lang="ts">
    import type { LayoutData } from './$types';
    import Navigation from '$lib/components/Navigation.svelte'
	import { setStores } from '$lib/stores/packinglist';
    
    export let data: LayoutData;

    setStores();
</script>
<Navigation></Navigation>
<slot></slot>