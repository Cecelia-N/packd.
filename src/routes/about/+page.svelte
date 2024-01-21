<script lang="ts">
	import Wave from "$lib/components/Wave.svelte";
	import { onMount } from "svelte";
	import { slide } from "svelte/transition";

    let button = false;
    onMount(()=>{
        button = true;
    });
</script>

{#key button}
<Wave colour="none" waveColour="dark-coral">
<section class="top">
    <h2>Welcome to packd.</h2>
    <p>What started out as a small hackathon project, but is turning in to something bigger.</p>
</section>
</Wave>
<Wave colour="dark-coral" waveColour='coral'>
    <h2>The idea</h2>
    <p>Hands up if you've ever stared at your suitcase, totally baffled, and thought, 'What should I even pack?' Yeah, we've been there too. Especially with unpredictable weather throwing a wrench in your outfit plans!</p>
    <p>packd. takes in details like the location and date of your trip, and generates a packing list based on the forecasted weather for that area, along with other suggestions based on your preferences.</p>
</Wave>
<Wave colour="coral" waveColour="creme">
    <h2>Our Team</h2>
    <div class="team-member">
        <h3>Cecelia</h3>
        <p> - Back-end and Front-end</p>
    </div>
    
    <div class="team-member">
        <h3>Anamta</h3>
        <p> - Front-end</p>
    </div>

    <div class="team-member">
        <h3>Kelly</h3>
        <p> - UX/UI Design</p>
    </div>
</Wave>


<Wave colour="creme" waveColour="dark-coral">
    <div class="row-wrapper">
        <div class="column">
            <h2>Some fun links</h2>
            <ul>
                <li><a href="https://github.com/Cecelia-N/packd.">GitHub repository</a></li>
                <li><a href="https://devpost.com/software/packd">Devpost</a></li>
                <li><a href="https://www.figma.com/file/y4uXXnA2aH8pSiZKmV7PGF/Website-Design?type=design&node-id=0%3A1&mode=design&t=CJlweqLbaj2VoDFF-1">Figma</a></li>
            </ul>
        </div>
        <div class="column">
        
            <h2>Our Stack</h2>
            <p>Framework: sveltekit</p>
            <p>Designs: Figma</p>
            <p>Authentication and and storage: Firebase</p>
            <p><a href="https://www.weatherapi.com/">Weather: WeatherApi</a></p>
        </div>
    </div>
</Wave>

<Wave colour="dark-coral" waveColour="coral">

</Wave>
{/key}

<style>
    .row-wrapper{
        display:flex;
        flex-direction: row;
        justify-content: space-between;
        flex-wrap: wrap;
    }
    .top {
        background-color: var(--coral);
        padding: 1rem;
        border-radius: 10px;
        text-align: center;
        max-width: 75%;
        margin: 0 auto;
    }

    p {
        margin-left: 3rem;
        margin-right: 3rem;
        
    }
    .team-member{
        display: flex;
        flex-direction: row;
        margin-left: 3rem;
    }
    .team-member > p {
        margin-left: .4rem;
        transform: translateY(5px);
    }
    ul {
        width: fit-content;
        color: var(--dark-coral);
    }
    li {  
        color: inherit;
        padding: 1rem;
        list-style: none;
    }
    a{
        text-decoration: none;
    }
    li:hover, li:active{
        background-color: var(--dark-coral);
        color: var(--creme);
        border-bottom: 2px solid var(--creme);
    }
</style>