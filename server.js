const express = require("express");
const nunjucks = require("nunjucks");
const server = express();

server.use(express.json());
server.use(express.urlencoded({ extended: true }));

server.use(express.static("public"));
server.set("view engine", "njk");
nunjucks.configure("src/app/views", {
  noCache: true,
  autoescape: false,
  express: server,
});

server.get("/", (req, res) => {
  res.render("index");
});

server.listen(3333);
