const express = require("express");
// const passport = require("passport");
const router = express.Router();

// I need to get the authcode, make it into base hexadecimal,
// then pass it into /signin where it will have headers meant to fetch

const toEncode = "22BRPY:0b66014118b0c6c3e1edc679ebecd2d0";

router.get(
  "/:code",
  (req, res) => {
    const authcode = req.params.code;

    req.headers.token = `Basic ${window.btoa(toEncode)}`;
    res.redirect("/:token");
  }
  // scope: ["activity", "heartrate", "location", "profile"]
);

module.exports = router;
