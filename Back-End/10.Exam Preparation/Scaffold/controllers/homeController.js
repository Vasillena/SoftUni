const router = require("express").Router();

router.get("/", (req, res) => {
  res.render("home"); //Автоматично си взема index-a от home папката
});

module.exports = router;
