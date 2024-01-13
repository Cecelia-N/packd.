<script lang="ts">
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

    let testObject = {
        "location":{
            "name":"Windsor",
            "region":"Ontario",
            "country":"Canada",
            "lat":42.33,
            "lon":-83.03,
            "tz_id":"America/Detroit",
            "localtime_epoch":1705179592,
            "localtime":"2024-01-13 15:59"
        },
        "current":{
            "last_updated_epoch":1705178700,
            "last_updated":"2024-01-13 15:45",
            "temp_c":-1.1,
            "temp_f":30,"is_day":1,
            "condition":{
                "text":"Overcast",
                "icon":"//cdn.weatherapi.com/weather/64x64/day/122.png",
                "code":1009
            },
            "wind_mph":27.3,
            "wind_kph":43.9,
            "wind_degree":280,
            "wind_dir":"W",
            "pressure_mb":998,
            "pressure_in":29.47,
            "precip_mm":0.18,
            "precip_in":0.01,
            "humidity":58,"cloud":100,
            "feelslike_c":-7.7,
            "feelslike_f":18.1,
            "vis_km":16,
            "vis_miles":9,
            "uv":1,
            "gust_mph":31.8,
            "gust_kph":51.1
        }
    }
let testObject2 = {"location":{"name":"Windsor","region":"Ontario","country":"Canada","lat":42.33,"lon":-83.03,"tz_id":"America/Detroit","localtime_epoch":1705179876,"localtime":"2024-01-13 16:04"},
"current":{
    "last_updated_epoch":1705179600,"last_updated":"2024-01-13 16:00","temp_c":-1.1,"temp_f":30,
    "is_day":1,
    "condition":{"text":"Overcast","icon":"//cdn.weatherapi.com/weather/64x64/day/122.png","code":1009},"wind_mph":27.3,"wind_kph":43.9,"wind_degree":280,"wind_dir":"W","pressure_mb":998,"pressure_in":29.47,"precip_mm":0.1,"precip_in":0,"humidity":58,"cloud":100,"feelslike_c":-8,"feelslike_f":17.6,"vis_km":16,"vis_miles":9,"uv":1,"gust_mph":31.8,"gust_kph":51.1}}

    let startDate: Date;
    let endDate: Date;

</script>

<input bind:value={city}>
<input bind:value={startDate} type="date">
<input bind:value={endDate} type="date">

<input bind:value={days}>
<button on:click={() => {getWeather(city, days)}}>Get my weather</button>

{#await weatherObject}
    loading...
{:then weatherObject} 
    
{JSON.stringify(weatherObject)}

<p>Temp: {testObject.current.temp_c}</p>
{/await}



<!-- <script lang="ts">
    import {weather} from '$lib/server/weather.server';

    let response: Promise<any>;
    function getData(){
        response = weather.getWeather();
    }
  </script>
  

  {#if response}
    {response}
  {/if}
  <h1>Weather App</h1>
<button on:click={getData}>Get Weather</button> -->