export function getThreshold(temp_c: number): 'freezing' | 'chilly'| 'warm' | 'hot' {
    if (temp_c < 0) {
        return 'freezing'
    }else if (temp_c <5){
        return 'chilly';
    }else if (temp_c < 22){
        return 'warm';
    } else {
        return 'hot';
    }
};
const key = '2c9e2d11842e40a3827193356241301';
export function getFutureWeather(city: string, startDate: Date){
    const response = fetch(`http://api.weatherapi.com/v1/future.json?key=${key}&q=${city}&aqi=no&dt=${startDate}`, {
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
    return response;
}

export function getForecast(city: string, date: Date){
    const dateString = date.toString();
const response = fetch(`http://api.weatherapi.com/v1/forecast.json?key=${key}&q=${city}&aqi=no&dt=${dateString}`, {
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
    return response;
}