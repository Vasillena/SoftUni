const express = require("express");
const handlebars = require("express-handlebars");
const cookieParser = require("cookie-parser");
const mongoose = require("mongoose");

const routes = require("./routes");
const { authentication } = require("./middlewares/authMiddleware");

const app = express();

app.engine("hbs", handlebars.engine({ extname: "hbs" }));

app.set("view engine", "hbs");

app.use("/static", express.static("public"));
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(authentication);
app.use(routes);

//TODO: Change database name
mongoose.set("strictQuery", false);
mongoose.connect(`mongodb://127.0.0.1:27017/crypto`);

app.listen(4000, () => console.log("Server is running on port 4000..."));
