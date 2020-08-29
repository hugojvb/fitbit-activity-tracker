const express = require("express");
const FitbitStrategy = require("passport-fitbit-oauth2").FitbitOAuth2Strategy;
const passport = require("passport");
const config = require("config");

const app = express();

// Routes

app.use("/signin", require("./routes/auth.js"));

// Passport strategy for Fitbit OAuth 2.0

passport.use(
  new FitbitStrategy(
    {
      clientID: "22BRPY",
      clientSecret: "0b66014118b0c6c3e1edc679ebecd2d0",
      callbackURL: "http://localhost:5000",
    },
    (accessToken, refreshToken, profile, done) => {
      User.findOrCreate({ fitbitId: profile.id }, (err, user) => {
        return done(err, user);
      });
    }
  )
);

//PORT Listening at 5000

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`server started on port ${PORT}`));
