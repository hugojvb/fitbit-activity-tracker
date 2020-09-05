const express = require("express");
// const passport = require("passport");
const router = express.Router();

router.get(
  "/grid/:code",
  (req, res) => {
    const authcode = req.params.code;
    const token = `bearer ${authcode.toString(16)}`;
    res.redirect("/:token");
  }
  // scope: ["activity", "heartrate", "location", "profile"]
);

module.exports = router;
