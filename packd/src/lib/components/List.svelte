<script lang="ts">
	import type { ListItem } from "$lib/stores/packinglist";

    export let title: string;
    export let list: ListItem[];
    let checked: boolean[] = [];

    list.forEach(item => {
        checked.push(false)
    })
    function removeItem(index: number){
       list.splice(index, 1);
       checked.splice(index, 1);
       list = list
    }

    function addItem(){
        list.push({name: '',quantity: 1});
        checked.push(false);
        list = list;
    }
</script>
<section>
    <h3>{title}</h3>
    {#each list as item, i }
        <div class='list-item {checked[i]?'complete':'incomplete'}'>
            <input type="checkbox" name="item{i}" bind:value={checked[i]}>
            <label for="item{i}">
                <input type='text'bind:value={item.name}>
            </label>
            <label for="quantity{i}">x</label>
            <input type="number" name="quantity{i}" bind:value={item.quantity}>
            <button class="remove" on:click={()=>{removeItem(i)}}>❌</button>
        </div>
    {/each}
    <button on:click={()=> addItem()}>Add Item</button>
    
</section>

<style>
    :root {
        --grey: #414143;
        --creme: #FFFFCC;
        --coral: #E3846B;
        --dark-coral: #A84528;
    }
    .list-item {
        border: .5px solid var(--grey);
        padding: 10px;
        box-shadow: 5px 5px 5px var(--grey);
        border-radius: 8px;
        margin-bottom: .5rem;
    }
    .complete {
        box-shadow: none;
    }
    section {
        border: 1px solid var(--grey);
        padding: 10px;
        margin: 1rem;
        border-radius: 8px;
        box-shadow: 5px 5px 5px var(--grey);
    }
    .remove {
        border: none;
        background-color: transparent;
        float: right;
    }
    input {
        /* border-radius: 8px; */
        border: none;
        border-bottom: 1px solid var(--grey);
        background-color: transparent;
        color: black;
    }
    input[type=text]{
        width: fit-content;
    }
    input[type=number]{
        width: 1.5rem;
     
    }
  
</style>