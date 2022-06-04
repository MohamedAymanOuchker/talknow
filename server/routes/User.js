const express = require("express");
const router = express.Router();

const db = require("../config/db");

router.post("/register", (req, res) => {
  const firstname = req.body.firstname;
  const surname = req.body.surname;
  const email = req.body.email;
  const password = req.body.password;

  db.query(
    "INSERT INTO Users (firstname, surname, email, password) VALUES (?, ?, ?, ?);",
    [firstname, surname, email, password],
    (err, result) => {
      if (err) {
        console.log(err);
      }
      res.send(result);
    }
  );
});

router.post("/login", (req, res) => {
  const email = req.body.email;
  const password = req.body.password;

  db.query("SELECT * FROM Users WHERE email = ?;", email, (err, result) => {
    if (err) {
      console.log(err);
    }
    if (result.length > 0) {
      if (password == result[0].password) {
        res.json({ loggedIn: true, email: email });
      } else {
        res.json({ loggedIn: false, message: "Wrong email or password" });
      }
    } else {
      res.json({ loggedIn: false, message: "User not found" });
    }
  })
});

module.exports = router;
