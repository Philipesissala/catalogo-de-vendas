const express = require("express");
const routes = express.Router();

const products = require("../controllers/product");

routes.get("/admin/products", products.index);
routes.get("/admin/products/new", products.create);

module.exports = routes;
