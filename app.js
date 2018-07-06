const express = require("express");
const path = require("path");
const exhbs = require("express-handlebars");

// INITIALIZE APP
const app = express();

// TEMPLATING ENGINE
app.engine("handlebars", exhbs({ defaultLayout: "layout" }));
app.set("view engine", "handlebars");

// ROUTES
const index = require("./routes/index");

// USE ROUTER
app.use("/", index);

// STATIC PUBLIC DIRECTORY
app.use(express.static(path.join(__dirname, "public")));

// PORT
const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`we are live at ${port}`);
});
