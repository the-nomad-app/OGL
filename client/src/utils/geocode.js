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
      "http://devapi.mygasfeed.com/stations/radius/" + lat + "/" + lng + "/10/reg/distance/apikey=" + process.env.GAS_KEY + ".json"
    );
  },
  getCampgrounds: function (lat, lng) {
    return axios.get(
      "https://maps.googleapis.com/maps/api/place/findplacefromtext/json?input=campground&inputtype=textquery{PARAMETERS}&locationbias=circle:16000@" + lat + "," + lng + "&key=AIzaSyCpTnhn5_HjpXAv0eDGHXVJAR4qnWaaslw"
    );
  },
  // Google Places API documentation: https://developers.google.com/maps/documentation/places/web-service/search?hl=en_US
};