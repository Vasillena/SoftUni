const router = require("express").Router();

const animalService = require("../services/animalService");
const { getErrorMessage } = require("../utils/errorHelpers");
const { isAuth } = require("../middleWares/authMiddleware");

router.get("/dashboard", async (req, res) => {
  const animals = await animalService.getAll().lean();

  res.render("animal/dashboard", { animals });
});

router.get("/create", isAuth, (req, res) => {
  res.render("animal/create");
});

router.post("/create", isAuth, async (req, res) => {
  const animalData = {
    ...req.body,
    owner: req.user._id,
  };

  try {
    await animalService.create(animalData);
    res.redirect("/animals/dashboard");
  } catch (err) {
    res.render("animal/create", { error: getErrorMessage(err) });
  }
});

router.get("/:animalId/details", async (req, res) => {
  const animalId = req.params.animalId;
  const animal = await animalService.getOne(animalId).lean();
  const isOwner = req.user?._id == animal.owner._id;
  const isDonator = animal.donators?.some((id) => id == req.user?._id);

  res.render("animal/details", { animal, isOwner, isDonator });
});

router.get("/:animalId/donate", isAuth, async (req, res) => {
  try {
    await animalService.donate(req.user._id, req.params.animalId);
  } catch (err) {
    console.log(err);
  }

  res.redirect(`/animals/${req.params.animalId}/details`);
});

router.get("/:animalId/delete", isAuth, async (req, res) => {
  const animalId = req.params.animalId;
  try {
    await animalService.delete(animalId);

    res.redirect("/animals/dashboard");
  } catch (err) {
    res.render(`animal/details`, {
      error: "Unsuccessful photo deletion!",
    });
  }
});

router.get("/:animalId/edit", isAuth, async (req, res) => {
  const animal = await animalService.getOne(req.params.animalId).lean();

  res.render("animal/edit", { animal });
});

router.post("/:animalId/edit", isAuth, async (req, res) => {
  const animalId = req.params.animalId;
  const animalData = req.body;

  try {
    await animalService.edit(animalId, animalData);

    res.redirect(`/animals/${animalId}/details`);
  } catch (err) {
    res.render("animal/edit", {
      error: "Unable to update animal",
      ...animalData,
    });
  }
});

router.get("/search", async (req, res) => {
  const { location } = req.query;
  const animals = await animalService.search(location);

  res.render("search", { animals, location });
});

module.exports = router;
