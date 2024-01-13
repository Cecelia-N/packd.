<script lang="ts">
    export let title: string;
    export let list: string[];


    function removeItem(index: number){
       list.splice(index, 1);
       list = list
    }

    function addItem(){
        list.push('')
        list = list;
    }
</script>

<h3>{title}</h3>
{#each list as item, i }
    <div class='list-item'>
        <input type="checkbox" name="item{i}">
        <label for="item{i}">
            <input type='text'bind:value={item}>
        </label>
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