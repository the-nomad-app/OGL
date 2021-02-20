const router = require("express").Router();
const mapRoutes = require("./maps");

// map routes
router.use("/maps", mapRoutes);

module.exports = router;
