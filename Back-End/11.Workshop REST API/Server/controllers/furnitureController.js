const router = require("express").Router();
const furnitureManager = require("../managers/furnitureManager");

router.get("/", async (req, res) => {
  let ownerId = "";

  if (req.query.where) {
    ownerId = req.query.where.split("=")[1].slice(1, -1);
  }

  const furnitures = await furnitureManager.getAll(ownerId);

  res.json(furnitures);
});

router.get("/:furnitureId", async (req, res) => {
  const furniture = await furnitureManager.getOne(req.params.furnitureId);

  res.json(furniture);
});

router.post("/", async (req, res) => {
  const furnitureData = req.body;

  const furniture = await furnitureManager.create(req.user._id, furnitureData);

  res.json({ _id: furniture._id });
});

router.put("/:furnitureId", async (req, res) => {
  const furnitureData = req.body;

  await furnitureManager.update(req.params.furnitureId, furnitureData);

  res.json({ ok: true });
});

router.delete("/:furnitureId", async (req, res) => {
  await furnitureManager.delete(req.params.furnitureId);

  res.json({ ok: true });
});

module.exports = router;
