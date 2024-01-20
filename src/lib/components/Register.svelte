<script lang="ts">
	import { authHandler } from "$lib/stores/authStore";


    let firstName: string;
    let lastName: string;
    let email: string;
    let password: string;
    let confirmPassword: string;

    let passwordsMatch: boolean;

    $: passwordsMatch = (password === confirmPassword);

    let passwordError: string;

    function registerUser(){
        if(passwordsMatch){
            authHandler.register(email, password)
        }else {
            passwordError = ""
        }
    }

</script>
<h2>Sign up!</h2>
<form id="register">
    <!-- <label for="firstName">First Name</label>
    <input name="firstName" type="string" bind:value={firstName}/>

    <label for="lastName">Last Name</label>
    <input name="lastName" type="string" bind:value={lastName}/> -->

    <label for="email">Email</label>
    <input name="email" type="email" bind:value={email}/>

    <label for="password">Password</label>
    <input name="password" type="password" bind:value={password}/>

    <label for="confirmPassword">Confirm Password</label>
    <input name="confirmPassword" type="password" bind:value={confirmPassword}/>
    {#if !passwordsMatch}
        <p>Passwords must match!</p>
    {/if}

    <button type="button" class="btn-cta" on:click={registerUser}>Register</button>
</form>