// TODO: Replace with real controller by assignment

const { getAll } = require("../services/hotelService");

const homeController = require("express").Router();

homeController.get("/", async (req, res) => {
  const hotels = await getAll();
  res.render("home", {
    title: "Home Page",
    hotels,
  });
});

module.exports = homeController;
