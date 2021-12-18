const express = require("express");
const nunjucks = require("nunjucks");
const server = express();

const CategoryRoutes = require("./src/app/routes/category");
const ProductRoutes = require("./src/app/routes/product");

server.use(express.json());
server.use(express.urlencoded({ extended: true }));

server.use(express.static("public"));
server.set("view engine", "njk");
nunjucks.configure("src/app/views", {
  noCache: true,
  autoescape: false,
  express: server,
});

server.use(CategoryRoutes);
server.use(ProductRoutes);

server.get("/", (req, res) => {
  res.render("index");
});

server.get("/admin", (req, res) => {
  res.render("admin/index");
});

server.listen(3333);
