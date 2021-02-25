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

//Hiking Options URL 
const options = {
  method: 'GET',
  url: 'https://trailapi-trailapi.p.rapidapi.com/trails/%7Bid%7D/maps/',
  headers: {
    // put in the code as an example to hide our API Key that we choose to use. 
    'x-rapidapi-key': process.env.HIKE_KEY,
    'x-rapidapi-host': 'trailapi-trailapi.p.rapidapi.com',
    "useQueryString": true
  }
};

axios.request(options).then(function (response) {
	console.log(response.data);
}).catch(function (error) {
	console.error(error);
});