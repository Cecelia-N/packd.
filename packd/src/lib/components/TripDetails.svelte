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

{JSON.stringify(form)}
<form>

    <label for="location">Where are you going to?</label><br>
    <input type="text" id="location" name="location" bind:value={form.location}><br><br>

    <label for="startDate">Start Date</label><br>
    <input type="date" id="startDate" name="startDate" bind:value={form.startDate}><br><br>

    <label for="endDate">End Date</label><br>
    <input type="date" id="endDate" name="endDate" bind:value={form.endDate}><br><br>

    <label for="formal">How many formal events will you be attending?</label>
    <input name="formal" type="number" min=0 bind:value={form.formalNum}><br><br>
        
 
    <label for="swimming">Do you plan to swim during the trip? How often?</label><br>
    <input type="radio" id="swim0" name="swimming" bind:group={form.swimmingNum} value=0 >
    <label for="swim0">Not at all.</label><br>

    <input type="radio" id="swim1" name="swimming" bind:group={form.swimmingNum} value=1>
    <label for="swim1">Just once or twice.</label><br>

    <input type="radio" id="swim2" name="swimming" bind:group={form.swimmingNum} value=2>
    <label for="swim2">All the time!</label><br><br>


    <label for="outdoor">Do you plan on working out or going to the gym during your trip? How often?</label><br>
    <input type="radio" id="outdoor0" name="outdoor" bind:group={form.outdoorNum} value=0 >
    <label for="outdoor0">Not at all.</label><br>
    <input type="radio" id="outdoor1" name="outdoor" bind:group={form.outdoorNum} value=1>
    <label for="outdoor1">Just once or twice.</label><br>
    <input type="radio" id="outdoor2" name="outdoor" bind:group={form.outdoorNum} value=3>
    <label for="outdoor2">All the time!</label><br><br>


    <label for="toiletries">When it comes to toiletries, do you ?</label><br>
    <input type="radio" id="toiletries0" name="toiletries" bind:group={form.toiletries} value=0 >
    <label for="toiletries0">Nah, I'll just buy stuff when I get there!</label><br>
    <input type="radio" id="toiletries1" name="toiletries" bind:group={form.toiletries} value=1>
    <label for="toiletries1">I like to come with the basics, but I don't pack everything.</label><br>
    <input type="radio" id="toiletries2" name="toiletries" bind:group={form.toiletries} value=2>
    <label for="toiletries2">I come very prepared.</label><br><br>



    <label for="electronics">Any tech or comfort items that you just can't forget to pack? (Don't worry, we already know you can't go without your phone.)</label><br>
    <input type="radio" id="electronics0" name="electronics" bind:group={form.electronics} value=0 >
    <label for="electronics0">Just the basics</label><br>
    <input type="radio" id="electronics1" name="electronics" bind:group={form.electronics} value=1>
    <label for="electronics1">This is a work trip, I need everything!</label><br><br>
    
    <p>Don't worry, if you feel like you've missed anything, you'll always be able to add it to the final list!</p>


    <button type="button" on:click={submitForm}>Get your packing list now!</button>
    
</form>