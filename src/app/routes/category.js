const express = require("express");

const category = require("../controllers/category");
const routes = express.Router();

routes.get("/admin/categories", category.index);
routes.get("/admin/categories/new", category.create);
routes.post("/admin/categories/save", category.save);
routes.post("/admin/category/delete/:id", category.delete);
routes.get("/admin/category/edit/:id", category.edit);
routes.post("/admin/category/update/:id", category.update);

module.exports = routes;
