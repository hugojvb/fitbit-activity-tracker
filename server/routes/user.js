const express = require("express");
const passport = require("passport");
const router = express.Router();

//Router using passport.authenticate()

router.get(
  "/:authcode",
  passport.authenticate("fitbit", {
    scope: ["activity", "heartrate", "location", "profile"],
  })
);

module.exports = router;
