<script lang="ts">
	import type { listItemSchema } from "$lib/schemas/schemas";
    export let list: Zod.infer<typeof listItemSchema>[];
    let checked: boolean[] = [];

    list.forEach(item => {
        checked.push(false)
    })
    function removeItem(index: number){
       list.splice(index, 1);
       checked.splice(index, 1);
       checked = checked;
       list = list
    }

    function addItem(){
        list.push({name: '',quantity: 1, packed: false});
        checked.push(false);
        list = list;
        checked = checked;
    }

</script>
<section>
    <slot name="name"/>
    {#each list as item, i }
        <!-- svelte-ignore a11y-click-events-have-key-events -->
        <!-- svelte-ignore a11y-no-static-element-interactions -->
        <div class='list-item {checked[i]?'complete':'incomplete'}' >
            <input class="checkmark" type="checkbox" name="item{i}" bind:checked={checked[i]}>
            {#if !checked[i]}
            <label for="item{i}">
                <input type='text'bind:value={item.name}>
            </label>
            <label for="quantity{i}">x</label>
            <input type="number" name="quantity{i}" bind:value={item.quantity}>
            {:else}
                <p class="complete">{item.name} x {item.quantity}</p>
            {/if}
            <button class="remove" on:click={()=>{removeItem(i)}}>❌</button>
        </div>
    {/each}
    <button class="add" on:click={()=> addItem()}>Add Item</button>
    
</section>

<style>
    p {
        display: inline;
        width: fit-content;
        margin: 0;
        text-decoration: line-through;
    }
    .list-item {
        display: flex;
        justify-content: space-between;
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
        border-radius: 8px;
        border: 2px solid var(--creme);
        box-shadow: 5px 5px 5px var(--grey);
        max-width: 800px;
        align-self: center;
        margin: 0 auto;
        margin-top: 1rem;
        margin-bottom: 1rem;
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

    .add{
        background-color: var(--creme);
        color: var(--dark-coral);
        border: none;
        box-shadow: 5px 5px 5px var(--grey);
        padding: .5rem;
        margin-top: 1rem;
    }
</style>