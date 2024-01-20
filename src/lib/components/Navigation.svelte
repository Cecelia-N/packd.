<script lang="ts">
    import { authHandler, getAuthStore } from '$lib/stores/authStore';
import {getClothes, getToiletries, getTech, getMisc} from '$lib/stores/packinglist'
    const clothes = getClothes();
    const toiletries = getToiletries();
    const tech = getTech();
    const misc = getMisc();
    
    const auth = getAuthStore();

$: hasList = ($clothes.length>0 || $toiletries.length > 0 || $tech.length > 0 || $misc.length > 0)
</script>

<header>
    <div>
        <h1 class="logo"><a href='/'>packd.</a></h1>
        <p class="slogan">explore with ease.</p>
    </div>
    <nav>
        <ul>
            <li><a href="/trip-details">your trip.</a></li>
            <li><a href="/packing-list">your list.</a></li>
            {#if $auth}
            <li><a href="/" on:click={()=>{authHandler.logout()}}>logout</a></li>
            {/if}
        </ul>
    </nav>
</header>

<style>
    header {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        background-color: #FFFFCC;
    }
    nav > ul{
        display: flex;
        margin-top: 0;
        margin-bottom: 0;
    }

    nav > ul > li {
        margin: .8rem;
        list-style-type: none;
    }

    .logo {
        position: relative;
        justify-self: left;
        color: black;
        margin: 0;
        margin-left: 1rem;
        font-size:xx-large;
    }
    .slogan {
        margin-top: 0;
        margin-bottom: 0;
        margin-left: 2rem;
        color: #A84528;
        font-size: medium;
        font-weight: 400;
        transform: translateY(-8px);
    }

</style>