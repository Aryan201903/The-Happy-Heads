var express = require("express");
var app = express();
var bodyParser = require("body-parser");
var session = require("express-session");
var db = require("./db_con");

var cors = require("cors");

app.use(cors());
app.use(session({ secret: "test123!@#" }));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json());
app.get("/", function (req, res) {
  res.end("Hello how are you g8");
});

app.get("/listuser", (req, res) => {
  res.send({ name: "aryan madan", address: "123", city: "ambala" });
});

app.post("/addemp", function (req, res) {
  console.log(req.body);
  const sql = "INSERT INTO userr(`name`,`email`,`phone`) Values (?)";
  const values2 = [req.body.name, req.body.email, req.body.phone];
  db.query(sql, [values2], (err, data) => {
    if (err) throw err;
    res.send(data);
  });
});
app.post("/addsub", function (req, res) {
  console.log(req.body);
  const sql = "INSERT INTO subscription(`name`,`email`,`phone`) Values (?)";
  const values2 = [req.body.name, req.body.email, req.body.phone];
  db.query(sql, [values2], (err, data) => {
    if (err) throw err;
    res.send(data);
  });
});

app.post("/adduser", function (req, res) {
  console.log(req.body);
  const { fname, lname, uname, email, pass } = req.body;

  db.query(
    "SELECT * FROM signup WHERE email = ?",
    [email],
    function (err, result) {
      if (err) {
        console.error(err);
        return res.status(500).json({ msg: "Internal Server Error" });
      }

      if (result.length > 0) {
        console.log("same user found");
        return res.status(400).send("status 400");
      } else {
        let sql =
          "INSERT INTO signup (firstName, lastName, username, email, password) VALUES (?, ?, ?, ?, ?)";
        let values = [fname, lname, uname, email, pass];
        db.query(sql, values, function (err, result) {
          if (err) {
            console.error(err);
            return res.status(500).send("Internal Server Error");
          }

          console.log("User created");
          res
            .status(200)
            .json({ msg: "User Created now you can login to continue" });
        });
      }
    }
  );
});
app.post("/checklogin", function (req, res) {
  console.log(req.body);
  const { uname, pass } = req.body;

  db.query(
    "SELECT * FROM signup WHERE username = ? and password = ?",
    [uname, pass],
    function (err, result) {
      if (err) {
        console.error(err);
        return res.status(500).json({ msg: "Internal Server Error" });
      }

      if (result.length > 0) {
        console.log("user matched");
        res.status(200).json({ msg: "login successfull" });
      }
    }
  );
});
//res.send({ msg: "request recieved" });

app.listen(8080, () => console.log("server running"));
