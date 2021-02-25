import axios from "axios";

const options = {
  method: 'GET',
  url: 'https://trailapi-trailapi.p.rapidapi.com/',
  params: {
    'q-activities_activity_type_name_eq': 'hiking',
    'q-city_cont': 'St. George',
    'q-state_cont': 'UT',
    lat: '34.1',
    lon: '-105.2',
    radius: '25',
    'q-country_cont': 'United States',
    limit: '25'
  },
  headers: {
    'x-rapidapi-key': '63c073738amsh9513eb30e5107aep11e052jsnb134aa9e2b17',
    'x-rapidapi-host': 'trailapi-trailapi.p.rapidapi.com'
  }
};
axios.request(options).then(function (response) {
	console.log(response.data);
}).catch(function (error) {
	console.error(error);
});