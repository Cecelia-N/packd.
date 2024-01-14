<script lang="ts">
    import type { PageData } from './$types';
    import {getClothes, getMisc, getTech, getToiletries} from '$lib/stores/packinglist'
    import List from '$lib/components/List.svelte'
    
    export let data: PageData;
    const clothes = getClothes();
    const toiletries = getToiletries();
    const tech = getTech();
    const misc = getMisc();
</script>

<h2>Your packing list</h2>
<List title="Clothes" list={$clothes}></List>

<List title="Toiletries" list={$toiletries} ></List>

<List title="Tech" list={$tech} ></List>

<List title="Miscellaneous" list={$misc} ></List>
