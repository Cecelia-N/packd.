<script lang="ts">
    let form: {
        startDate: String,
        endDate: String,
        weather: string,
        city: string,
        formalNum: number,
        swimmingNum: number,
        outdoorNum: number,
        accessories: boolean,
        toiletries: boolean,
        elctronics: boolean,
        
    } = {
        startDate: "",
        endDate: "",
        weather: "",
        city: "",
        toiletries: true,
        formalNum: 0,
        swimmingNum: 0,
        outdoorNum: 0,

    }
    
</script>
{JSON.stringify(form)}
<form>
    <label for="length">How long is your trip?</label><br>
    <input type="date" id="startDate" name="startDate" >
    <input type="date" id="endDate" name="endDate"><br><br>

    <label for="weather">What's the weather looking like at your destination?</label><br>
    <select name="weather" id="weather" bind:value={form.weather}>
        <option value="cold" >Cold Climate</option>
        <option value="mild">Mild Climate</option>
        <option value="hot">Hot Climate</option>
    </select><br><br>

    <label for="city">What city are you travelling to?</label><br>
    <input type="text" id="city" name="city" bind:value={form.city}><br><br>
    
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




    <!-- <label for="activities">Please check the types of activities you will be partaking in.</label><br>
    <input type="checkbox" id="formal" name="formal" bind:checked={form.formal}>
    <label for="formal"> Formal Events</label><br> 
    {#if form.formal==true}
        <label for=formalNum>How many?</label>
        <input type="number" id=formalNum name=formalNum bind:value={form.formalNum}><br>
    {/if}

    <input type="checkbox" id="water" name="water" bind:checked={form.water}>
    <label for="water"> Swimming/Beach</label><br>
    {#if form.water==true}
        <label for=waterNum>How many?</label>
        <input type="number" id=waterNum name=waterNum bind:value={form.waterNum}><br>
    {/if}

    <input type="checkbox" id="outdoor" name="outdoor" bind:checked={form.outdoor}>
    <label for="outdoor"> Hiking and other outdoor activities</label><br>
    {#if form.outdoor==true}
        <label for=outdoorNum>How many?</label>
        <input type="number" id=outdoorNum name=outdoorNum bind:value={form.outdoorNum}><br>
    {/if}

    <input type="checkbox" id="athletic" name="athletic" bind:checked={form.athletic}>
    <label for="athletic"> Gym and other sports</label><br>
    {#if form.athletic==true}
        <label for=athleticNum>How many?</label>
        <input type="number" id=athleticNum name=athleticNum bind:value={form.athleticNum}><br>
    {/if}

    <input type="checkbox" id="business" name="business" bind:checked={form.business}>
    <label for="business"> Business Meetings</label><br><br>
    {#if form.business==true}
        <label for=businessNum>How many?</label>
        <input type="number" id=businessNum name=businessNum bind:value={form.businessNum}><br>
    {/if} -->

    <!-- <label for="toiletries">Do you need to pack accessories?</label>
    <select name="accessories" id="accessories" bind:value={form.accessories}>
        <option value=true>Yes</option>
        <option value=false>No</option>
    </select><br><br> -->

    <label for="toiletries">Do you prefer to use your own toiletries, or do you like to buy what you need as you go?</label>
    <select name="toiletries" id="toiletries" bind:value={form.toiletries}>
        <option value=true>Yes</option>
        <option value=false>No</option>
    </select><br><br>

    {#if form.toiletries==true}
        <label for=toiletriesList>We've got the basics, so which toiletries from thsi extended list would you want in your packing list?</label>
        
    {/if}


    <button type="submit">Get your packing list now!</button>
    
</form>