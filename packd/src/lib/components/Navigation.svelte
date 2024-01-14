<script lang="ts">

</script>

<header>
    <div style="justify-content:left">
        <h1><a href='/'>packd.</a></h1>
        <h3>explore with ease.</h3>
    </div>
    <button class="start-now" ><a href="/trip-details"> start now!</a></button>
  
    
    <nav>
        <!-- <ul>
            <li><a href='/'>Home</a></li>
            <li><a href='/trip-details'>Trip Details</a></li>
            <li><a href='/packing-list'>Your Packing List</a></li>
        </ul> -->
        
    </nav>
    
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
    /* .logo {
        height: 80px;
    } */
    h1{
        margin: 0;
        margin-left: 1rem;
        font-size:xx-large;
    }
    h3 {
        margin-top: 0;
        margin-bottom: 1rem;
        margin-left: 2rem;
        color: #A84528;
        font-size: medium;
        font-weight: 400;
        transform: translateY(-8px);
    }
    nav {
        align-self: center;
    }
    ul {
        display: flex;
        flex-direction: row;
    }
    li {
        list-style-type: none;  
        margin: 10px;
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