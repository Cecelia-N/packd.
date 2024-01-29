<script lang='ts'>
	import ShowList from "$lib/components/ShowList.svelte";
	import YourLists from "$lib/components/YourLists.svelte";
	import { getListIndex } from "$lib/stores/firestore";

  const listIndex = getListIndex();
</script>
{#if $listIndex == -1}
  <YourLists bind:index={$listIndex}/>
{:else}
<button on:click={()=>{$listIndex = -1}}>back</button>
  <ShowList index={$listIndex}/>
{/if} 