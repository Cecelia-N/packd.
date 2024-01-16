<script lang="ts">
	import { getThreshold } from "$lib/helpers/weatherHelper";
    import {getFutureWeather} from '$lib/helpers/weatherHelper'

    let weatherObject: Promise<any>;
    let avgTemp: number;
    async function getAvgTemp(){
        weatherObject = await getFutureWeather(city, startDate);
        const avgTemp = JSON.parse(JSON.stringify(weatherObject)).forecast.forecastday[0].day.avgtemp_c
        const dress = getThreshold(avgTemp)

        return {
            avgTemp,
            dress
        }
    }

    let city = 'Windsor';
    let startDate: Date;
    let endDate: Date;
    let dress: string;
    
</script>
{JSON.stringify(avgTemp)}
{dress}
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

<!-- <input bind:value={days}> -->
<button on:click={() => {process()}}>Get my weather</button>

{#await weatherObject}
    loading...
{:then weatherObject} 
    <h2>weather object</h2>
    <div>{JSON.stringify(weatherObject)}</div>

{/await}
