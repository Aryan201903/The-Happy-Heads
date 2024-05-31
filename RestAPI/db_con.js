var mysql = require("mysql");
var db = mysql.createConnection({
  host: "localhost",
  user: "root",
  database: "theHappyHeads",
  password: "Aryan1!2@3#",
});
db.connect(function (err) {
  if (err) throw err;
});
module.exports = db;
