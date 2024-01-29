<script lang='ts'>
  import { listHandler } from "$lib/stores/listHandler";
	import { getLists } from "$lib/stores/firestore";

  export let index;

  const lists = getLists();
  function deleteList(index: number){
    $lists.splice(index, 1)
    listHandler.updateList({lists: $lists});
    $lists = $lists;
  }
  
  function newList(){
    $lists.push({listName: '', categories: []});
    listHandler.updateList({lists: $lists});
    $lists = $lists;
  }

  function updateListName(i: number, name: string){
    $lists[i].listName = name;
    $lists = $lists;
    listHandler.updateList({lists: $lists})
  }
</script>

<section class="bg-coral">
  <h1>your lists.</h1>
  {#if $lists !== null}
    {#each $lists as list, i}
      <div class="list"> 
        <input class="listName" type="text" bind:value={list.listName} placeholder="unnamed list">
        <button on:click={()=>{updateListName(i, list.listName)}}>update list name</button>
        <button on:click={()=>{index = i}}>View list</button>
        <button on:click={()=>{deleteList(i)}}>Delete</button>
      </div>
    {/each}
    <button on:click={()=>{newList()}}>create new list</button>
  {/if}
</section>

<style>
  .list{
    border: 1px solid;
    padding: 1rem;
  }
  input.listName{
    background-color: transparent;
    border: none;
    font-family: "Lexend Giga";
    color: var(--creme);
    font-size: 2rem;
    margin-bottom: 0;
  }
</style>