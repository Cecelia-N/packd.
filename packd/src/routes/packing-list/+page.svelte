<script lang="ts">
    import {getClothes, getMisc, getTech, getTemp, getToiletries, getCity} from '$lib/stores/packinglist'
    import List from '$lib/components/List.svelte'
    
    const clothes = getClothes();
    const toiletries = getToiletries();
    const tech = getTech();
    const misc = getMisc();
    const temp = getTemp();
    const city = getCity();
</script>
<section>
<h1>Your list.</h1>
{#if $temp !== undefined && $city!== undefined}
<p>It's going to be {$temp}°c in {$city}</p>
{/if}
    <List title="Clothes" list={$clothes}></List>

    <List title="Toiletries" list={$toiletries} ></List>

    <List title="Tech" list={$tech} ></List>

    <List title="Miscellaneous" list={$misc} ></List>
</section>

<style>
    section {
        background-color: #E3846B;
        padding: 1rem;
        box-shadow: 5px -2px  var(--creme);
        border-radius: 5px;
        margin: 0 auto;
        max-width: 70%;
        margin-top: 1rem;
    }
    h1 {
       text-align: center;
    }
    p {
        text-align: center;
    }
</style>