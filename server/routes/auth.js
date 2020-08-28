const router = express.Router();

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
