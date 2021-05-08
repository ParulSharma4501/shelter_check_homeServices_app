const passport = require("passport");
const mongoose = require("mongoose");
const keys = require("../config/keys");
const e = require("express");

const User = mongoose.model("users");

module.exports = (app) => {
  app.get(
    "/auth/google",
    passport.authenticate("google", {
      scope: ["profile", "email"],
    })
  );

  app.get("/auth/google/callback", passport.authenticate("google"));

  app.get("/api/current_user", (req, res) => {
    res.send(req.user);
  });

  app.post("/api/register", async (req, res, done) => {
    const existingUser = await User.findOne({ email: req.body.email });

    if (existingUser) {
      console.log("User Already Registered!!");
      return done(null, existingUser);
    }
    //we added a return statement and removed that shitty else because agr user mil gaya to return ho jega aur us return k neeche ka code chlega hi nhi......so we can avoid that else part
    const user = await new User({
      username: req.body.username,
      email: req.body.email,
      password: req.body.password,
      mobile: req.body.mobile,
      city: req.body.city,
    }).save();
    done(null, user);
    console.log("Thanks for your registration!!");
  });

  app.post("/api/login", async (req, res, done) => {
    const username = req.body.email;
    const password = req.body.password;

    const existingUser = await User.findOne({ email: username });

    if (existingUser) {
      if (existingUser.password === password) {
        console.log("You have been logged in successfully!!");
      } else {
        console.log("Incorrect password!!");
      }
    } else {
      console.log("You are not registered with us!!");
    }
  });

  app.get("/api/logout", (req, res) => {
    req.logout();

    console.log("Logged out");
    res.send(req.user);
  });
};
