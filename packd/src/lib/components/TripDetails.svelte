<script lang="ts">
    // import {getToiletries, getClothes} from '$lib/stores/packinglist'
    // const tList = getToiletries();
    let form: {
        startDate: String,
        endDate: String,
        weather: string,
        location: string,
        formalNum: number,
        swimmingNum: number,
        outdoorNum: number,
        toiletries: number,
        electronics: number,
        shopping: number,
        medication: boolean
        
    } = {
        startDate: "",
        endDate: "",
        weather: "",
        location: "",
        formalNum: 0,
        swimmingNum: 0,
        outdoorNum: 0,
        toiletries: 0,
        electronics: 0,
        shopping: 0,
        medication: false

    }

</script>

{JSON.stringify(form)}
<form>
    <label for="length">How long is your trip?</label><br>
    <input type="date" id="startDate" name="startDate" >
    <input type="date" id="endDate" name="endDate"><br><br>


    <!-- <label for="weather">What's the weather looking like at your destination?</label><br>
    <select name="weather" id="weather" bind:value={form.weather}>
        <option value="cold" >Cold Climate</option>
        <option value="mild">Mild Climate</option>
        <option value="hot">Hot Climate</option>
    </select><br><br> -->


    <label for="location">Where are you going to?</label><br>
    <input type="text" id="location" name="location" bind:value={form.location}><br><br>
    

    <label for="formal">Do you plan to go to formal events during the trip? How often?</label><br>
    <input type="radio" id="formal0" name="formal" bind:group={form.formalNum} value=0 >
    <label for="formal0">Not at all.</label><br>
    <input type="radio" id="formal1" name="formal" bind:group={form.formalNum} value=1>
    <label for="formal1">Just once or twice.</label><br>
    <input type="radio" id="formal2" name="formal" bind:group={form.formalNum} value=2>
    <label for="formal2">All the time!</label><br><br>


    <label for="swimming">Do you plan to swim during the trip? How often?</label><br>
    <input type="radio" id="swim0" name="swimming" bind:group={form.swimmingNum} value=0 >
    <label for="swim0">Not at all.</label><br>
    <input type="radio" id="swim1" name="swimming" bind:group={form.swimmingNum} value=1>
    <label for="swim1">Just once or twice.</label><br>
    <input type="radio" id="swim2" name="swimming" bind:group={form.swimmingNum} value=2>
    <label for="swim2">All the time!</label><br><br>


    <label for="outdoor">Do you plan to work out/do lots of physical activity during the trip? How often?</label><br>
    <input type="radio" id="outdoor0" name="outdoor" bind:group={form.swimmingNum} value=0 >
    <label for="outdoor0">Not at all.</label><br>
    <input type="radio" id="outdoor1" name="outdoor" bind:group={form.swimmingNum} value=1>
    <label for="outdoor1">Just once or twice.</label><br>
    <input type="radio" id="outdoor2" name="outdoor" bind:group={form.swimmingNum} value=2>
    <label for="outdoor2">All the time!</label><br><br>


    <label for="toiletries">Do you prefer to use your own toiletries, or do you like to buy what you need as you go?</label><br>
    <input type="radio" id="toiletries0" name="toiletries" bind:group={form.toiletries} value=0 >
    <label for="toiletries0">Nah, I just go with the flow!</label><br>
    <input type="radio" id="toiletries1" name="toiletries" bind:group={form.toiletries} value=1>
    <label for="toiletries1">I like to come with the basics, but I don't pack everything.</label><br>
    <input type="radio" id="toiletries2" name="toiletries" bind:group={form.toiletries} value=2>
    <label for="toiletries2">I come very prepared.</label><br><br>


    <label for="electronics">Any tech or comfort items that you just can't forget to pack? (Don't worry, we already know you can't go without your phone.)</label><br>
    <input type="radio" id="electronics0" name="electronics" bind:group={form.electronics} value=0 >
    <label for="electronics0">Nope, I've already got them.</label><br>
    <input type="radio" id="electronics1" name="electronics" bind:group={form.electronics} value=1>
    <label for="electronics1">I like to come with all my electronics!</label><br><br>


    <label for="shopping">How much shopping do you plan to do on the trip?</label><br>
    <input type="radio" id="shopping0" name="shopping" bind:group={form.shopping} value=0 >
    <label for="shopping0">Not too much. Actually, I don't even know if I'll even buy anything at all.</label><br>
    <input type="radio" id="shopping1" name="shopping" bind:group={form.shopping} value=1>
    <label for="shopping1">A fair amount!</label><br>
    <input type="radio" id="shopping2" name="shopping" bind:group={form.shopping} value=2>
    <label for="shopping2">It's not a vacation if you don't load up on souvenirs!</label><br><br>


    <label for="medication">Any tech or comfort items that you just can't forget to pack? (Don't worry, we already know you can't go without your phone.)</label><br>
    <input type="radio" id="medication0" name="medication" bind:group={form.electronics} value=true >
    <label for="medication">Nah, I don't want to bring any.</label><br>
    <input type="radio" id="medication1" name="medication" bind:group={form.electronics} value=false>
    <label for="medication">Yes, please, I'd like to bring some.</label><br>


    <p>Don't worry, if you feel like you've missed anything, you'll always be able to add it to the final list!</p>


    <button type="submit">Get your packing list now!</button>
    
</form>