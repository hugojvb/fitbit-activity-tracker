const express = require("express");
const FitbitStrategy = require("passport-fitbit-oauth2").FitbitOAuth2Strategy;
const passport = require("passport");

const app = express();

// Routes

app.use("/signin", require("./routes/user"));

// Passport strategy for Fitbit OAuth 2.0
as;
passport.use(
  new FitbitStrategy(
    {
      clientID: FITBIT_CLIENT_ID,
      clientSecret: FITBIT_CLIENT_SECRET,
      callbackURL: "http://localhost:5000/signin",
    },
    (accessToken, refreshToken, profile, done) => {
      User.findOrCreate({ fitbitId: profile.id }, (err, user) => {
        return done(err, user);
      });
    }
  )
);

// Middleware

app.configure(() => {
  app.use(passport.initialize());
  app.use(passport.session());
});

//PORT Listening at 5000

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`server started on port ${PORT}`));
