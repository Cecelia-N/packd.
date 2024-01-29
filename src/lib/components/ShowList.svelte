<script lang="ts">
	import { listHandler } from '$lib/stores/listHandler';
	import { getLists } from '$lib/stores/firestore';
	import List from './List.svelte';
  export let index: number;
  const lists = getLists();
  const list = $lists[index]

  $: {
    listHandler.updateList({lists: $lists})
  }

  function addCategory(){
    $lists[index].categories.push({category: '', items:[]});
    $lists = $lists;
    listHandler.updateList({lists: $lists})
  }
  function updateCategoryName(categoryIndex: number, name: string){
    $lists[index].categories[categoryIndex].category = name;
    $lists = $lists;
    listHandler.updateList({lists: $lists}); 
  }
</script>

<section class="bg-coral">
  <h1>{list.listName}</h1>
  {#each list.categories as category, i}
   
    <List list={category.items}>
      <div slot="name" class="catName"> 
        <input class="h1" type="text" placeholder="category" bind:value={category.category}/>
            
        <button on:click={()=>{updateCategoryName(i, category.category)}}>Save name</button>
      </div>
    </List>
  {/each}
  <button on:click={addCategory}>add category</button>
</section>

<style>
  input.h1{
    background-color: transparent;
    border: none;
    font-family: "Lexend Giga";
    color: var(--creme);
    font-size: 2rem;
    margin-bottom: 0;
    width: 80%;
  }

  .catName{
    display: flex;
    width: 100%;
  }
</style>