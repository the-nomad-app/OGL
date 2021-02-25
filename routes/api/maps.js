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

// put in the code as an example to hide our API Key that we choose to use. 
// process.env.HIKE_KEY,
   

axios.request(options).then(function (response) {
	console.log(response.data);
}).catch(function (error) {
	console.error(error);
});