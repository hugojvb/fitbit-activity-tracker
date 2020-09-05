const express = require("express");
// const passport = require("passport");
const router = express.Router();

//Router using passport.authenticate()

router.post("/token", (req, res) => {
  const toEncode = "22BRPY:0b66014118b0c6c3e1edc679ebecd2d0";
  const authorization = `Basic ${window.btoa(toEncode)}`;
  res.set("Authorization", authorization);
  res.set("Content-Type", "application/x-www-form-urlencoded");
});

module.exports = router;
