const express = require("express");
const passport = require("passport");
const router = express.Router();

//Router using passport.authenticate()

router.get(
  "/signin",
  passport.authenticate("fitbit", {
    successMessage()
  })
);

module.exports = router;
