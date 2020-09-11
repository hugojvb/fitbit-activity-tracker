const express = require("express");
// const passport = require("passport");
const router = express.Router();

//Router using passport.authenticate()

router.post("/", (req, res) => {
  const toEncode = "22BRPY:0b66014118b0c6c3e1edc679ebecd2d0";
  const authorization = `Basic ${Buffer.from(toEncode).toString("base64")}`;
  res.set("Authorization", authorization);
  res.set("Content-Type", "application/x-www-form-urlencoded");
});

// scope: ["activity", "heartrate", "location", "profile"]

module.exports = router;
