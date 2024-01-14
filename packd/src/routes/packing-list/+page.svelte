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
<section>
<h2>Your list.</h2>
    <List title="Clothes" list={$clothes}></List>

    <List title="Toiletries" list={$toiletries} ></List>

    <List title="Tech" list={$tech} ></List>

    <List title="Miscellaneous" list={$misc} ></List>
</section>

<style>
    section {
        background-color: #E3846B;
        padding: 1rem;
        box-shadow: 5px 5px 5px #414143;
        border-radius: 5px;
        margin: 2rem;
    }
    h2 {
       text-align: center;
    }
</style>