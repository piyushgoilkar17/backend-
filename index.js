require("dotenv").config();
const express = require("express");
const app = express();
const port = 5000;

const githubata = {
  name: "Piyush",
  age: 22,
  location: "India",
};
app.get("/", (req, res) => {
  res.send("Hello World!");
});
app.get("/twitter", (req, res) => {
  res.send("Hello Twitter!");
});
app.get("/login", (req, res) => {
  res.send("Hello Login!");
});
app.get("/github", (req, res) => {
  res.json(githubata);
});

app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${process.env.PORT}`);
});
