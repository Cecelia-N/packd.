<script lang="ts">
	import { getAuthStore } from "$lib/stores/authStore";
    import Auth from "$lib/components/Auth.svelte";
	import { goto } from "$app/navigation";


    const auth = getAuthStore();
</script>


{#if typeof $auth === undefined}
    <p>Loading...</p>
{:else}
    {#if $auth}
        <!-- If the user is logged in, show site content -->
        You are logged in!
        {goto('/')}
    {:else}
        <!-- Else, login -->
        <Auth />
    {/if}
{/if}