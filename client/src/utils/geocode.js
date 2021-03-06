import axios from "axios";
require('dotenv').config()

// eslint-disable-next-line
export default {
  geocode: function (search) {
    return axios.get(
      "https://geocode.search.hereapi.com/v1/geocode?q=" + search + "&apiKey=ajXCyBIYEY8xiKijsANkbShF3FN2FcIIAQ2jRUKtlyM"
    );
  },
  getGas: function(lat, lng) {
    return axios.get(
      "https://api.mygasfeed.com/stations/radius/" + lat + "/" + lng + "/25/reg/distance/&apikey=9nftz46ixu.json?"
    );
  },
  getCampgrounds: function (lat, lng) {
    return axios.get(
      "https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=37.188490,-112.999300&radius=50000&type=campground&key=AIzaSyCpTnhn5_HjpXAv0eDGHXVJAR4qnWaaslw"
    );
  },
  // Google Places API documentation: https://developers.google.com/maps/documentation/places/web-service/search?hl=en_US
};