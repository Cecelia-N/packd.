<script lang="ts">
	import { getAuthStore } from "$lib/stores/authStore";
    import Auth from "$lib/components/Auth.svelte";


    const auth = getAuthStore();
</script>


{#if typeof $auth === undefined}
    <p>Loading...</p>
{:else}
    {#if $auth}
        <!-- If the user is logged in, show site content -->
        <slot></slot>
    {:else}
        <!-- Else, login -->
        <Auth />
    {/if}
{/if}