const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");

const routes = require("./routes");
const { authentication } = require("./middlewares/authMiddleware");

const app = express();

app.use(cors());
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(authentication());
app.get("/", (req, res) => {
  res.send("Hello");
});

app.use(routes);
mongoose.set("strictQuery", false);
mongoose.connect("mongodb://127.0.0.1:27017/furniture");

app.listen(3030, () => console.log("Server is listening on port 3030..."));
