const { verifyTtoken } = require("../services/userService");

module.exports = () => (req, res, next) => {
  const token = req.cookies.token;
  if (token) {
    try {
      const userData = verifyTtoken(token);
      req.user = userData;
    } catch (err) {
      res.clearCookie("token");
      res.redirect("/auth/login");
      return;
    }
  }

  next();
};
