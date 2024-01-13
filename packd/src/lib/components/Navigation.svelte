<script lang="ts">

</script>

<header>
    <div class="logo">
        <p>logo here</p>
    </div>
    <nav>
        <ul>
            <li><a href='/'>Home</a></li>
            <li><a href='/trip-details'>Trip Details</a></li>
            <li><a href='/packing-list'>Your Packing List</a></li>
        </ul>
    </nav>
</header>

<style>
    header {
        width: 100%;
        display: flex;
        height: 3rem;
    }
    .logo {
        height: 80px;
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
        text-decoration: none;
    }
</style>