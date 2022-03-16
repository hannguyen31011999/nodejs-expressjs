const express = require("express");
const app = express();
const port = 8888;

app.get("/", (req, res) => {
  res.send("Hello world");
});
app.get("/blog", (req, res) => {
  res.send("Hello blog");
});

app.listen(port, () => {
  console.log("Server listen at port 8888");
});
