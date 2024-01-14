<script lang="ts">
	import { getThreshold } from "$lib/helpers/weatherHelper";

    const key = '2c9e2d11842e40a3827193356241301';
    const q = 'windsor';

    function getWeather(city: string, days: number){
        const response = fetch(`http://api.weatherapi.com/v1/forecast.json?key=${key}&q=${city}&aqi=no&days=${days}`, {
        method: 'GET',
    })
        .then(async (res) => {
            return await res.json();
        })
        .catch((err) => {
            console.log('ERROR - Failed to Fetch response!', err);
            return {
                success: false,
                error: err,
            };
        });
        weatherObject = response;
        return response;
    }

    let weatherObject: Promise<any>;

    let city = ''
    let days = 1;



    let startDate: Date;
    let endDate: Date;

</script>

<div>
    <label for="city">City</label>
    <input name="city" bind:value={city}>
</div>

<div>
    <label for="startDate">Start Date</label>
    <input name="startDate" bind:value={startDate} type="date">
</div>

<div>
    <label for="endDate">End Date</label>
    <input name="endDate" bind:value={endDate} type="date">
</div>

<input bind:value={days}>
<button on:click={() => {getWeather(city, days)}}>Get my weather</button>

{#await weatherObject}
    loading...
{:then weatherObject} 
    
{JSON.stringify(weatherObject)}

{/await}
