const express = require("express");
const passport = require("passport");
const router = express.Router();

//Router using passport.authenticate()

router.get("/grid/:user", passport.authenticate("fitbit", { session: false }), {
  scope: ["activity", "heartrate", "location", "profile"],
});

module.exports = router;
