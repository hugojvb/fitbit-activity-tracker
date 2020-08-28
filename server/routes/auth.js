const express = require("express");
const router = express.Router();

const app = express();

//Authenticate Requests

app.get(
  "/auth/fitbit",
  passport.authenticate("fitbit", {
    scope: ["activity", "heartrate", "location", "profile"],
  })
);

app.get(
  "/auth/fitbit/callback",
  passport.authenticate("fitbit", {
    successRedirect: "/auth/fitbit/success",
    failureRedirect: "/auth/fitbit/failure",
  })
);

const PORT = process.env.PORT || 5000;

app.listen(PORT);
