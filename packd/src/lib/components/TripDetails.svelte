<script lang="ts">
	import { goto } from '$app/navigation';
    import {createPackingList, type form} from '$lib/helpers/packer'
	import { getClothes, getMisc, getTech, getTemp, getToiletries, getCity } from '$lib/stores/packinglist';
	import { fly } from 'svelte/transition';
   
    let form: form = {
		location: "",
        startDate: undefined,
        endDate: undefined,
		formalNum: 0,
		swimmingNum: 0,
		outdoorNum: 0,
		toiletries: 0,
		electronics: 0,
	}
    const clothes = getClothes();
    const toiletries = getToiletries();
    const tech = getTech();
    const avgTemp = getTemp();
    const city = getCity();
    // const misc = getMisc();

    async function submitForm(){
        const lists = createPackingList(form);
        $clothes = (await lists).clothes;
        $toiletries = (await lists).toiletries;
        $tech = (await lists).tech;
        $avgTemp = (await lists).avgTemp;
        $city = form.location;
        // $misc = (await lists).misc;
        setTimeout(()=> {
            goto('/packing-list')
        })
    }

</script>

<!-- {JSON.stringify(form)} -->
<form >
    <div class="row">

        <div class="column-question">
            <legend >Where are you going to?</legend>
        </div>
        <div class="column-answer">
            <label for="location">City, state/province</label>
            <input type="text" id="location" name="location" bind:value={form.location}><br><br>
            {#if form.location !== ''}
            <a in:fly={{x:-300, duration: 1000}} class="next" href="#row1">Next</a>
            {:else}
            <div class="spacer"></div>
            {/if}
        </div>
    </div>
        
    <div id="row1" class="row">
        <div class="column-question">
            <legend>When is your trip?</legend>
        </div>
            
        <div class="column-answer">
            <label for="startDate">Start Date</label>
            <input type="date" id="startDate" name="startDate" bind:value={form.startDate}><br><br>
            
            <label for="endDate">End Date</label>
            <input type="date" id="endDate" name="endDate" bind:value={form.endDate}><br><br>
            {#if form.startDate != undefined && form.endDate !== undefined }
            <a class="next" href="#row2" in:fly={{x:-300, duration: 1000}}>Next</a>
            {:else}
                <div class="spacer"></div>
            {/if}
        </div>

    </div>

    <div id="row2" class="row">
        
        <div class="column-question">
            <legend >How many formal events will you be attending?</legend>
        </div>
        <div class="column-answer">
            <label for="formal">Number of events</label>
            <input name="formal" type="number" min=0 bind:value={form.formalNum}>
            <a class="next" href="#row3">Next</a>
        </div>
    </div>
             
    <div id="row3" class="row">
        <div class="column-question">
            <legend>Do you plan to swim during the trip?</legend>
        </div>
        <div class="column-answer">
            <div>
                <input type="radio" id="swim0" name="swimming" bind:group={form.swimmingNum} value=0 >
                <label for="swim0">Not at all.</label><br>
            </div>
            <div>
                <input type="radio" id="swim1" name="swimming" bind:group={form.swimmingNum} value=1>
                <label for="swim1">Just once or twice.</label><br>
            </div>
            <div>
                <input type="radio" id="swim2" name="swimming" bind:group={form.swimmingNum} value=2>
                <label for="swim2">All the time!</label><br><br>
            </div>
            <a class="next" href="#row4">Next</a>
        </div>
    </div>

    <div id="row4" class="row">
        
        <div class="column-question">
            <legend>Do you plan on working out or going to the gym during your trip?</legend>
        </div>
        <div class="column-answer">
            <div>
                <input type="radio" id="outdoor0" name="outdoor" bind:group={form.outdoorNum} value=0 >
                <label for="outdoor0">Not at all.</label><br>
            </div>
            <div>
                <input type="radio" id="outdoor1" name="outdoor" bind:group={form.outdoorNum} value=1>
                <label for="outdoor1">Just once or twice.</label><br>
            </div>
            <div>
                <input type="radio" id="outdoor2" name="outdoor" bind:group={form.outdoorNum} value=3>
                <label for="outdoor2">All the time!</label>
            </div>
            <a class="next" href="#row5">Next</a>
        </div>
    </div>

    <div id="row5" class="row">
        <div class="column-question">
            <legend>What kind of toiletry packer are you??<legend>
        </div>
        <div class="column-answer">

            <div>
                <input type="radio" id="toiletries0" name="toiletries" bind:group={form.toiletries} value=0 >
                <label for="toiletries0">I just buy stuff when I get there!</label><br>
            </div>
            <div>
                <input type="radio" id="toiletries1" name="toiletries" bind:group={form.toiletries} value=1>
                <label for="toiletries1">I only pack the basics</label><br>
            </div>
            <div>
                <input type="radio" id="toiletries2" name="toiletries" bind:group={form.toiletries} value=2>
                <label for="toiletries2">I come very prepared.</label><br><br>
            </div>
            <a class="next" href="#row6">Next</a>
        </div>
    </div>
        <div id="row6" class="row">
            <div class="column-question">
                <legend>How much of your tech will you need?</legend>
            </div>
            
            <div class="column-answer">
                <div>
                    <input type="radio" id="electronics0" name="electronics" bind:group={form.electronics} value=0 >
                    <label for="electronics0">Just the basics</label><br>
                </div>
                <div>
                    <input type="radio" id="electronics1" name="electronics" bind:group={form.electronics} value=1>
                    <label for="electronics1">This is a work trip, I need everything!</label>
                </div>
                <a class="next" href="#row7">Next</a>
            </div>
        </div>

        <div id="row7" class="row final">

                <legend>Your supercharged packing list is right at your fingertips..</legend><br>
                <button class="btn-cta" on:click={submitForm}>Get your packing list now!</button>
            
        </div>
 
</form>

<style>
    form {
        display: flex;
        flex-direction: column;
        align-items: center;
    }
    legend {
        font-weight: 700;
        margin: 1.5rem;
        font-size: 1.5rem;
    }
    div{
        
        margin-bottom: .5rem;
    }
    label {
        font-size: 1.2em;
        padding: .5rem;
    }
    .row{
        margin: 3rem;
        box-shadow: 5px 5px 5px var(--dark-coral);
        display: flex;
        min-height: 25rem;
        width: 80%;
        
        background-color: var(--creme);
    }
    .final {
        flex-direction: column;
        min-height: fit-content;
        padding: 2rem;
    }
    .column-question{
        flex: 50%;
        padding-top: 4rem;
    }
    .column-answer{
        display:flex;
        flex: 50%;
        flex-direction: column;
        justify-content: center;
        padding: 3rem;
    }
    .btn-cta {
        background-color: var(--dark-coral);
        color:var(--creme);
        width: fit-content;
        align-self: center;
    }

    input[type='number']{
        margin-bottom: 2rem;
    }
    .spacer {
        padding: 1rem;
    }
    .next {
        background-color: var(--coral);
        text-align: center;
        text-decoration: none;
        color: black;
        padding: 1rem;
        padding-right: 2rem;
        padding-left: 2rem;
        box-shadow: 5px 5px 5px var(--dark-coral);
        width: fit-content;
        margin-top: 1rem;
    }
</style>