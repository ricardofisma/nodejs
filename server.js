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

const http = require("http");

const hostname = "127.0.0.1";
const port = 3000;

app.use(express.static("public"));

app.listen(3000, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
