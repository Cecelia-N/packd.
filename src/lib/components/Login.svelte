<script lang="ts">
	import { authHandler } from "$lib/stores/authStore";

    let email: string;
    let password: string;

</script>


<section>
    <h2>Welcome back!</h2>

    <label for="email">Email</label>
    <input name="email" type="text" bind:value={email}>

    <label for="password">Password</label>
    <input name="password" type="password" bind:value={password}>

    <button class="btn-cta login" on:click={() =>{
        authHandler.login(email, password)}}>Login</button>
</section>

<style>



    .login {
        margin-top: 10px;
    }


    section {
        margin: 0 auto;
        padding: 20px;
    }
</style>