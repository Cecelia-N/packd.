<script lang="ts">
    export let menuActive = false;
    function toggleMenu(){
        menuActive = !menuActive;
    }
</script>

<!-- svelte-ignore a11y-click-events-have-key-events -->
<!-- svelte-ignore a11y-no-static-element-interactions -->
<div class="hamburger {menuActive ? 'active':''}" on:click={toggleMenu}>
    <div class="bar1"></div>
    <div class="bar2"></div>
    <div class="bar3"></div>
</div>


<style>
/* HAMBURGER TOGGLE STYLES */
.hamburger {
    margin-bottom: 1rem;
    cursor: pointer;
}

.bar1,
.bar2,
.bar3 {
    width: 35px;
    height: 5px;
    background-color: var(--dark-coral);
    border-radius: 3px;
    margin: 6px 0;
    transition: 0.4s;
    z-index: 1;
}

.active .bar1 {
    transform: translate(0, 11px) rotate(-45deg);
}

.active .bar2 {
    opacity: 0;
}

.active .bar3 {
    transform: translate(0, -11px) rotate(45deg);
}

@media screen and (min-width: 768px) {
    .hamburger {
        display: none;
    }
}
</style>