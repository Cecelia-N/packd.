<script lang="ts">
	import Login from "$lib/components/Login.svelte";
	import Register from "$lib/components/Register.svelte";


    let register = false;
    function toggleRegister(){
        register = !register;
    }
</script>
<section class="bg-coral">
    {#if register}
        <Register/>
        <p>Already have an account?</p>
    {:else}
        <Login/>
        <p>Don't have an account?</p>
    {/if}


    <button on:click={toggleRegister}>{register ? 'Login': 'Sign up'}</button>
</section>