import axios from "axios";

// eslint-disable-next-line
export default {
  geocode: function (search) {
    return axios.get(
      "https://geocode.search.hereapi.com/v1/geocode?q=" + search + "&apiKey=ajXCyBIYEY8xiKijsANkbShF3FN2FcIIAQ2jRUKtlyM"
    );
  },
  getGas: function() {
    return axios.get(
      "http://api.amp.active.com/camping/campgrounds?landmarkName=true&landmarkLat=37.84035&landmarkLong=-122.4888889&api_key=s4hjq23y6wxb9aaxsquxn2xs"
    );
  },
};