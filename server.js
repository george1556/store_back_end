const path = require("path");
const express = require("express");
const bodyParser = require("body-parser");
const port = process.env.PORT || 8000;
const cors = require("cors");
const logger = require("morgan");
const knex = require("./db/knex");

//Passport
const passport = require("passport");
//END Passport

//Passport Local
const LocalStrategy = require("passport-local").Strategy;
//End Passport Local

const movies = require("./routes/movieRoutes");
const customers = require("./routes/customerRoutes");
const transactions = require("./routes/transactionRoutes");

const app = express();

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

app.use(logger("dev"));
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

//Passport
app.use(passport.initialize());
app.use(passport.session());

app.get("/success", (req, res) => res.send("Welcome " + req.query.username));
app.get("/error", (req, res) => res.send("Login error"));

passport.serializeUser(function(user, cb) {
  cb(null, user.id);
});
passport.deserializeUser(function(id, cb) {
  User.findById(id, function(err, user) {
    cb(err, user);
  });
});
// End Passport

//Passport Local
passport.use(
  new LocalStrategy(function(username, password, done) {
    UserDetails.findOne(
      {
        username: username
      },
      function(err, user) {
        if (err) {
          return done(err);
        }

        if (!user) {
          return done(null, false);
        }

        if (user.password != password) {
          return done(null, false);
        }
        return done(null, user);
      }
    );
  })
);

app.post(
  "/",
  passport.authenticate("local", { failureRedirect: "/error" }),
  function(req, res) {
    res.redirect("/success?username=" + req.user.username);
  }
);

//End Passport Local

app.use("/movies", movies);
app.use("/customers", customers);
app.use("/transactions", transactions);

app.listen(port, function() {
  console.log("listening on port: ", port);
});
