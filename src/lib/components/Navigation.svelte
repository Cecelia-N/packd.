<script lang="ts">
  import { authHandler, getAuthStore } from '$lib/stores/authStore';
  import { getClothes, getMisc, getTech, getToiletries } from '$lib/stores/packinglist';
  import { fly } from 'svelte/transition';
  import Hamburger from './Hamburger.svelte';
  import Logo from './Logo.svelte';
  const clothes = getClothes();
  const toiletries = getToiletries();
  const tech = getTech();
  const misc = getMisc();
  
  const auth = getAuthStore();

  $: hasList = ($clothes.length>0 || $toiletries.length > 0 || $tech.length > 0 || $misc.length > 0);

  let menuActive = false;
</script>

<header>
  <Logo/>
  <Hamburger bind:menuActive/>
  {#key menuActive}
  <nav id="navDrawer" class="{menuActive ? 'active' : 'hidde'}" transition:fly={{x: 300, duration: 900}}>
    <ul id='navlist'>
      {#if $auth}
      
      <li><a href="/my-trips">my trips.</a></li>
      <!-- <li><a href="/packing-list">your list.</a></li> -->
      
      <li><a href="/" on:click={()=>{authHandler.logout()}}>logout</a></li>
      {:else}
      <li><a href="/login">login.</a></li>
      {/if}
      <li><a href="/about">about packd.</a></li>
    </ul>
  </nav>
  {/key}
</header>

<style>
header{
  position: fixed;
  display: grid;
  align-items: center;
  grid-template-columns: 1fr 1fr;
  top:  0;
  width: 100%;
  background-color: var(--creme);
  z-index: 99;
}

nav {
  /* default styles for nav - (mobile) */
  width: 0;
  position: fixed;
  justify-self: end;
  top: 0;
  right: 0;
  overflow-x: hidden;
  z-index: 99;
}

#navDrawer.active{ 
  background-color: var(--coral);
  box-shadow: -3px 3px 5px var(--grey);
  width: 40%;
  border-radius: 5px;
}
ul#navlist{
  display: grid;
  list-style-type: none;
  transition: 0.3s;
  padding: 0;
  margin-top: 3.4rem;
  margin-bottom: 0;
}
ul#navlist li {  
  color: var(--dark-coral);
  border-bottom: 2px solid var(--dark-coral);   
  padding: 1rem;
}
ul#navlist a{
  text-decoration: none;
}
ul#navlist li:hover, li:active{
  background-color: var(--dark-coral);
  color: var(--creme);
  border-bottom: 2px solid var(--creme);
}
@media screen and (min-width: 768px) {
  ul#navlist {
    display: flex;
    flex-direction: row;
    margin: 0;
  } 

  #navDrawer.active{
    background-color: transparent;
    box-shadow: none;
  }
  nav {
    position: relative;
    background-color: transparent;
    width: fit-content;
  }
  ul#navlist li{
    border-bottom: none;
  }
}
</style>