<script lang="ts">
	import { goto } from '$app/navigation';
    // import {getToiletries, getClothes} from '$lib/stores/packinglist'
    // const tList = getToiletries();
    import {createPackingList, type form} from '$lib/helpers/packer'
	import { getClothes, getMisc, getTech, getToiletries } from '$lib/stores/packinglist';
   
    let form: form = {
        location: "",
        startDate: new Date(),
        endDate: new Date(),
        formalNum: 0,
        swimmingNum: 0,
        outdoorNum: 0,
        toiletries: 0,
        electronics: 0,
        shopping: 0,
        medication: false

    }
    const clothes = getClothes();
    const toiletries = getToiletries();
    const tech = getTech();
    // const misc = getMisc();

    async function submitForm(){
        const lists = createPackingList(form);
        $clothes = (await lists).clothes;
        $toiletries = (await lists).toiletries;
        $tech = (await lists).tech;
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
            <legend class="question">Where are you going to?</legend>
        </div>
        <div class="column-answer">
            <input type="text" id="location" name="location" bind:value={form.location}><br><br>
        </div>
    </div>
        
    <div class="row">
        <div class="column-question">
            <legend>First off... how long is your trip?</legend>
        </div>
            
        <div class="column-answer">
            <label for="startDate">Start Date</label>
            <input type="date" id="startDate" name="startDate" bind:value={form.startDate}><br><br>
            
            <label for="endDate">End Date</label>
            <input type="date" id="endDate" name="endDate" bind:value={form.endDate}><br><br>
            
        </div>

    </div>

    <div class="row">
        
        <div class="column-question">
            <legend class="question">How many formal events will you be attending?</legend>
        </div>
        <div class="column-answer">
            <input name="formal" type="number" min=0 bind:value={form.formalNum}>
        </div>
    </div>
            
    
        
    <div class="row">
        <div class="column-question">
            <legend>Do you plan to swim during the trip? How often?</legend>
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
        </div>
    </div>




    <div class="row">
        
        <div class="column-question">
            <legend>Do you plan on working out or going to the gym during your trip? How often?</legend>
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
        </div>
    </div>

        


    
    <div class="row">
        <div class="column-question">
            <legend>When it comes to toiletries, do you ?<legend>
        </div>
        <div class="column-answer">

            <div>
                <input type="radio" id="toiletries0" name="toiletries" bind:group={form.toiletries} value=0 >
                <label for="toiletries0">Nah, I'll just buy stuff when I get there!</label><br>
            </div>
            <div>
                <input type="radio" id="toiletries1" name="toiletries" bind:group={form.toiletries} value=1>
                <label for="toiletries1">I like to come with the basics, but I don't pack everything.</label><br>
            </div>
            <div>
                <input type="radio" id="toiletries2" name="toiletries" bind:group={form.toiletries} value=2>
                <label for="toiletries2">I come very prepared.</label><br><br>
            </div>
        </div>
    </div>

        


    
        <div class="row">
            <div class="column-question">
                <legend>Any tech or comfort items that you just can't forget to pack? (Don't worry, we already know you can't go without your phone.)</legend>
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
            </div>
        </div>
    
   

        <div class="row">

            <div class="column-answer">
                <p>Don't worry, if you feel like you've missed anything, you'll always be able to add it to the final list!</p><br>
            </div>
            <div class="column-answer">
                <button class="orange-button" on:click={submitForm}>Get your packing list now!</button>
            </div>
            
        </div>
            
        

   
    
</form>

<style>
    
    p {
        font-size: smaller;
        margin: 1.5rem
    }

    h1 {
        font-weight: 500
    }

    h2 {
        font-weight: 700;
    }

    fieldset {
        border-width: 0;
    }


    legend {
        font-size: x-large;
        font-weight: 700;
        margin: 1.5rem;
    }

    .grey-button {
        background-color: var(--grey);
    }

    .orange-button {
        background-color: var(--dark-coral);
        
    }

    .question {
        font-size: x-large;
        font-weight: 700;
        margin: 1rem;
    }

    .option {
        font-size: large;
        font-weight: 400;
    }

    .flex-container {
        display: flex;
        flex-direction: column;
        background-color: #FFFFCC;
        margin: 3rem;
        box-shadow: 5px 5px 5px var(--dark-coral);
    }
    .row{
        margin: 3rem;
        box-shadow: 5px 5px 5px var(--dark-coral);
        background-color: #FFFFCC;
        display: flex;
        height: 20rem;
    }
    .column-question{
        flex: 50%;
        align-items: left;
        
    }
    .column-answer{
        display:flex;
        flex: 50%;
        flex-direction: column;
        justify-content: center;
        padding: 3rem;
    }
</style>