const express = require("express");
const morgan = require("morgan");
const path = require("path");
const { engine } = require("express-handlebars");
const app = express();
const port = 8888;

// use morgan log
app.use(morgan("combined"));
// use handlebar
app.engine(".hbs", engine({ extname: ".hbs" }));
app.set("view engine", "hbs");
app.set("views", path.join(__dirname, "resources/views"));
// move file static
app.use(express.static(path.join(__dirname, "public")));

app.get("/", (req, res) => {
  res.render("home");
});
app.get("/blog", (req, res) => {
  res.render("blog");
});

app.listen(port, () => {
  console.log("Server listen at port 8888");
});
