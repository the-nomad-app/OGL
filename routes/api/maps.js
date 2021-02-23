const router = require("express").Router();
const mapsController = require("../../controllers/mapsController");
const axios = require("axios")

// Matches with "/api/maps"
router.route("/")
  .get(mapsController.findAll)
  .post(mapsController.create);

// Matches with "/api/maps/:id"
router
  .route("/:id")
  .get(mapsController.findById)
  .put(mapsController.update)
  .delete(mapsController.remove);

module.exports = router;


// Trail API 


const options = {
  method: 'GET',
  url: 'https://trailapi-trailapi.p.rapidapi.com/trails/%7Bid%7D/maps/',
  headers: {
    'x-rapidapi-key': '63c073738amsh9513eb30e5107aep11e052jsnb134aa9e2b17',
    'x-rapidapi-host': 'trailapi-trailapi.p.rapidapi.com',
    "useQueryString": true
  }
};

axios.request(options).then(function (response) {
	console.log(response.data);
}).catch(function (error) {
	console.error(error);
});