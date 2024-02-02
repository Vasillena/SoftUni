const router = require("express").Router();

const userService = require("../services/userService");
const { TOKEN_KEY } = require("../config/config");
const { getErrorMessage } = require("../utils/errorHelpers");

router.get("/login", (req, res) => {
  res.render("users/login");
});

router.post("/login", async (req, res) => {
  const { email, password } = req.body;

  try {
    const token = await userService.login(email, password);

    res.cookie(TOKEN_KEY, token);

    res.redirect("/");
  } catch (err) {
    res.render("users/login", { error: getErrorMessage(err) });
  }
});

router.get("/register", (req, res) => {
  res.render("users/register");
});

router.post("/register", async (req, res) => {
  const { email, password, repeatPassword } = req.body;

  try {
    const token = await userService.register({
      email,
      password,
      repeatPassword,
    });

    res.cookie(TOKEN_KEY, token);

    res.redirect("/");
  } catch (err) {
    res.render("users/register", { error: getErrorMessage(err) });
  }
});

router.get("/logout", (req, res) => {
  res.clearCookie("token");
  res.redirect("/");
});

module.exports = router;
