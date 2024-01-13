<script lang="ts">
    import type { PageData } from './$types';
    import {getClothes, getToiletries} from '$lib/stores/packinglist'
    import List from '$lib/components/List.svelte'
    
    export let data: PageData;

    type listType = 'clothes' | 'toiletries'
    const clothes = getClothes();
    const toiletries = getToiletries();
</script>

<h2>Your packing list</h2>
<List title="Clothes" list={$clothes}></List>

<List title="Toiletries" list={$toiletries} ></List>

