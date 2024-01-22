<script lang="ts">
	import { getAuthStore } from '$lib/stores/authStore';
	import {  getDocument, getLists } from '$lib/stores/firestore';
    import List from '$lib/components/List.svelte'

    const user = getDocument();

    const auth = getAuthStore();
    const lists = getLists();

</script>
<section class="bg-coral">
    {#if $lists}
        {#each $lists as list}
            <List  title={list.listName} list={list.items} />
        {/each}
    {/if}
</section>
