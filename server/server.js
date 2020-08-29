const express = require("express");
const FitbitStrategy = require("passport-fitbit-oauth2").FitbitOAuth2Strategy;
const passport = require("passport");
const config = require("config");

const app = express();

// Routes

app.use("/signin", require("./routes/user"));

// Passport strategy for Fitbit OAuth 2.0

passport.use(
  new FitbitStrategy(
    {
      clientID: config.get(FITBIT_CLIENT_ID),
      clientSecret: config.get(FITBIT_CLIENT_SECRET),
      callbackURL: config.get(CALLBACK_URL),
    },
    (accessToken, refreshToken, profile, done) => {
      User.findOrCreate({ fitbitId: profile.id }, (err, user) => {
        return done(err, user);
      });
    }
  )
);

// Middleware required by passport

app.configure(() => {
  app.use(passport.initialize());
  app.use(passport.session());
});

//PORT Listening at 5000

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`server started on port ${PORT}`));
