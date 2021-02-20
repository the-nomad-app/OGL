const router = require("express").Router();
const booksController = require("../../controllers/mapsController");
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
    'x-rapidapi-key': '31741db822mshc8c3aa2d28768c1p15c3fbjsnb10c43f0aa7d',
    'x-rapidapi-host': 'trailapi-trailapi.p.rapidapi.com'
  }
};

axios.request(options).then(function (response) {
	console.log(response.data);
}).catch(function (error) {
	console.error(error);
});