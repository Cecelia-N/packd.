<script lang="ts">
    import type { LayoutData } from './$types';
    import Navigation from '$lib/components/Navigation.svelte'
    
    export let data: LayoutData;
</script>
<Navigation></Navigation>
<slot></slot>