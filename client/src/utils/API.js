import axios from "axios";

// eslint-disable-next-line
export default {
  geocode: function (search) {
    return axios.get(
      "https://geocode.search.hereapi.com/v1/geocode?q=" + search + "&apiKey=ajXCyBIYEY8xiKijsANkbShF3FN2FcIIAQ2jRUKtlyM"
    );
  },
};