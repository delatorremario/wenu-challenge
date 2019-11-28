const jwt = require("jsonwebtoken");

module.exports = (req, res, next) => {
  try {
    const token = req.header("auth-token");
    if (!token) return res.status(401).send("Send Token Please!");

    const verify = jwt.verify(token, process.env.TOKEN_SECRET);
    req.user = verify;
    next();
  } catch (err) {
    res.status(400).send(err);
  }
};
