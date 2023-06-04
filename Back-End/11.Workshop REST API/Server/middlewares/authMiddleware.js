const jwt = require("../lib/jsonwebtoken");
const { SECRET } = require("../constants");

exports.authentication = () => async (req, res, next) => {
  const token = req.header("X-Authorization");

  if (token) {
    try {
      const decodedToken = await jwt.verify(token, SECRET);

      req.user = decodedToken;
    } catch (err) {
      return res.status(401).json({ ok: false });
    }
  }

  next();
};
