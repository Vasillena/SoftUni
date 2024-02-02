const express = require("express");
const handlebars = require("express-handlebars");
const path = require("path");
const mongoose = require("mongoose");
const cookieParser = require("cookie-parser");

const { auth } = require("./middleWares/authMiddleware");
const routes = require("./routes");

const app = express();

mongoose
  .connect("mongodb://127.0.0.1:27017/friendly-world")
  .then(() => console.log("DB connected successfully"))
  .catch((err) => console.log("DB Error,", err.message));

app.engine(
  "hbs",
  handlebars.engine({
    extname: "hbs",
  })
);
app.set("view engine", "hbs");
app.set("views", "src/views");

app.use(express.static(path.resolve(__dirname, "public")));
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(auth);
app.use(routes);

app.listen(3000, console.log("Server is listening on port 3000..."));
