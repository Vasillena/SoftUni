const router = require("express").Router();

const userController = require("./controllers/userController");
const furnitureController = require("./controllers/furnitureController");

router.use("/users", userController);
router.use("/furnitures", furnitureController);

module.exports = router;
