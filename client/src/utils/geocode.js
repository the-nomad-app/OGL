import axios from "axios";
require('dotenv').config()

// eslint-disable-next-line
export default {
  getHikes: function (search) {
    return axios.get(
      "https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=37.188490,-112.999300&radius=50000&type=hiking_trail&key=AIzaSyCpTnhn5_HjpXAv0eDGHXVJAR4qnWaaslw"
    );
  },
  getGas: function(lat, lng) {
    return axios.get(
      "https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=37.188490,-112.999300&radius=50000&type=gas_station&key=AIzaSyCpTnhn5_HjpXAv0eDGHXVJAR4qnWaaslw"
    );
  },
  getCampgrounds: function (lat, lng) {
    return axios.get(
      "https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=37.188490,-112.999300&radius=50000&type=campground&key=AIzaSyCpTnhn5_HjpXAv0eDGHXVJAR4qnWaaslw"
    );
  },
  // Google Places API documentation: https://developers.google.com/maps/documentation/places/web-service/search?hl=en_US
};