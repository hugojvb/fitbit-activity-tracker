const express = require("express");
// const passport = require("passport");
const router = express.Router();

// I need to get the authcode, make it into base hexadecimal,
// then pass it into /signin where it will have headers to fetch

router.get("/:access_token", (req, res) => {
  const authcode = req.params.access_token;
  console.log(req.params);
  res.send("wait");
  // res.redirect("http://api.fitbit.com/oauth/token");
});

module.exports = router;
