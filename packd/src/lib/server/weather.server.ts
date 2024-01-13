// import { PRIVATE_WEATHER_API_KEY } from '$env/static/private';


export const weather = {

    getWeather: async (
        city = 'Windsor',
	) => {
        console.log('getting weather...')
		// const header = {
		// 	'Content-Type': 'application/json',
		// 	Authorization: `Bearer ${PRIVATE_CARBONE_API_KEY}`
		// };

		// const payload = {
		// 	convertTo: convertTo,
		// 	reportName: reportName,
		// 	data: await formatData(uid, 'will')
		// };
		const response = fetch(`http://api.weatherapi.com/v1/current.json?key='2c9e2d11842e40a3827193356241301'&q=${city}&aqi=no`, {
			method: 'POST',
			// headers: header,
			// body: JSON.stringify(payload)
		})
            .then(async (res) => {
                console.log('response: ',res.json())
				return await res.json();
			})
			.catch((err) => {
				console.log('ERROR - Failed to Fetch response!');
				return {
					success: false,
					error: err
				};
			});
		return response;
	}
};
