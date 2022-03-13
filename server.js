const express = require("express");
const nunjucks = require("nunjucks");
const server = express();

const CategoryRoutes = require("./src/app/routes/category");
const ProductRoutes = require("./src/app/routes/product");
const homeRoutes = require("./src/app/routes/home");

server.use(express.json());
server.use(express.urlencoded({ extended: true }));

server.use(express.static("public"));
server.use(express.static("upload"));

server.set("view engine", "njk");
nunjucks.configure("src/app/views", {
  express: server,
  noCache: true,
  autoescape: false,
});

server.use(CategoryRoutes);
server.use(ProductRoutes);
server.use(homeRoutes);

server.listen(3333, () => console.log("Running..."));
