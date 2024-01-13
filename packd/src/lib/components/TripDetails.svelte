<script lang="ts">
    let form: {
        startDate: String,
        endDate: String,
        weather: string,
        city: string,
        formal: boolean,
        water: boolean,
        outdoor: boolean,
        athletic: boolean,
        business: boolean,
        toiletries: boolean
    } = {
        startDate: "",
        endDate: "",
        weather: "",
        city: "",
        formal: false,
        water: false,
        outdoor: false,
        athletic: false,
        business: false,
        toiletries: true
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

    <label for="activities">Please check the types of activities you will be partaking in.</label><br>
    <input type="checkbox" id="formal" name="formal" bind:checked={form.formal}>
    <label for="formal"> Formal Events</label><br> 

    <input type="checkbox" id="water" name="water" bind:checked={form.water}>
    <label for="water"> Swimming/Beach</label><br>
    <input type="checkbox" id="outdoor" name="outdoor" bind:checked={form.outdoor}>
    <label for="outdoor"> Hiking and other outdoor activities</label><br>
    <input type="checkbox" id="athletic" name="athletic" bind:checked={form.athletic}>
    <label for="formal"> Gym and other sports</label><br>
    <input type="checkbox" id="business" name="business" bind:checked={form.business}>
    <label for="business"> Business Meetings</label><br><br>
    

    <label for="toiletries">Do you need to pack toiletries?</label>
    <select name="toiletries" id="toiletries" bind:value={form.toiletries}>
        <option value=true>Yes</option>
        <option value=false>No</option>
    </select>
    
</form>