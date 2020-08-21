const express = require("express");
const app = express();
const mongoose = require("mongoose");
mongoose.connect("mongodb://localhost/fotos");
Schema = mongoose.Schema;
var userSchemaJSON = {
  email: String,
  pass: String,
};
var user_schema = new Schema(userSchemaJSON);
var User = mongoose.model("User", user_schema);

app.post("/users", function (req, res) {
  var user = new User({ email: req.body.email, pass: req.body.pass });
  user.save(function () {
    res.send("Recibimos tus datos");
  });
});

const http = require("http");

const hostname = "127.0.0.1";
const port = 3000;

app.use(express.static("public"));

const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
