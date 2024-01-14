<script lang="ts">

</script>

<header>
    <div style="justify-content:left">
        <h1 class="logo"><a href='/'>packd.</a></h1>
        <p class="slogan">explore with ease.</p>
    </div>
    <button class="start-now" ><a href="/trip-details"> start now!</a></button>    
</header>

<style>
    header {
        width: 100%;
        display: flex;
        flex-direction: column;
        height: 3.7rem;
        background-color: #FFFFCC;
    }
    .start-now {
        position: absolute;
        right: 1rem;
        margin: 0.8rem;
    }
    .logo {
        color: black;
        margin: 0;
        margin-left: 1rem;
        font-size:xx-large;
    }
    .slogan {
        margin-top: 0;
        margin-bottom: 1rem;
        margin-left: 2rem;
        color: #A84528;
        font-size: medium;
        font-weight: 400;
        transform: translateY(-8px);
    }
    a {
        color: inherit;
        text-decoration: inherit;
    }

    button{
        background-color: #E3846B;
        color: #414143;
        padding: 1rem;
        height: 1rem;
        font-size: small;
        font-weight: 600;
        display: flex;
        align-items: center;
    }

</style>