const express = require("express");

const category = require("../controllers/category");
const routes = express.Router();

routes.get("/admin/categories", category.index);
routes.get("/admin/categories/new", category.create);
routes.post("/admin/categories/save", category.save);

module.exports = routes;
