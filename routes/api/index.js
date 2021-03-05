const router = require("express").Router();
const mapRoutes = require("./maps");
// const authRoutes = require("./auth");

// map routes
router.use("/maps", mapRoutes);
// router.use("/auth", authRoutes);

module.exports = router;
