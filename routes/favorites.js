const router = require("express").Router();
const verifyToken = require("./verifyToken");

router.get("/", verifyToken, (req, res) => {
  const favorites = ["uno", "dos", "tres"];
  res.json({ favorites });
});

module.exports = router;
