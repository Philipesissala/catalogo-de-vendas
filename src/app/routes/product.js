const express = require("express");
const routes = express.Router();

const products = require("../controllers/product");

routes.get("/admin/products", products.index);
routes.get("/admin/products/new", products.create);
routes.post("/admin/products/save", products.save);
routes.post("/admin/products/delete/:id", products.delete);
routes.get("/admin/products/edit/:id", products.edit);
routes.post("/admin/products/update/:id", products.update);

module.exports = routes;
