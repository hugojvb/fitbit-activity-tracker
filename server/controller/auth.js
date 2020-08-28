const express = require("express");
const passport = require("passport");
const router = express.Router();

//Router using passport.authenticate()

router.get(
  "/signin",
  passport.authenticate("fitbit", function (req, res) {
    res.json({ id: req.user.id, username: req.user.username });
  })
);

router.post(
  "/signin",
  passport.authenticate("fitbit", {
    successRedirect: "/grid/:user",
    failureRedirect: "/signin",
    failureFlash: "Invalid username or password.",
    successFlash: "Welcome!",
  })
);

module.exports = router;
