<script lang="ts">
	import type { ListItem } from "$lib/stores/packinglist";

    export let title: string;
    export let list: ListItem[];


    function removeItem(index: number){
       list.splice(index, 1);
       list = list
    }

    function addItem(){
        list.push({name: '',quantity: 1})
        list = list;
    }
</script>

<h3>{title}</h3>
{#each list as item, i }
    <div class='list-item'>
        <input type="checkbox" name="item{i}">
        <label for="item{i}">
            <input type='text'bind:value={item.name}>
        </label>
        <label for="quantity{i}">X</label>
        <input type="number" name="quantity{i}" bind:value={item.quantity}>
        <button on:click={()=>{removeItem(i)}}>Remove item</button>
    </div>
{/each}
<button on:click={()=> addItem()}>Add Item</button>


<style>
    .list-item {
        border: .5px solid lightblue;
        padding: 10px;
        box-shadow: 5px 5px 5px lightblue;
        border-radius: 8px;
        margin-bottom: .5rem;
    }
</style>