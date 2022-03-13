const express = require("express");
const routes = express.Router();
const homeController = require("../controllers/home");

routes.get("/", homeController.index);
routes.get("/:slug", homeController.categorie);
routes.get("/admin", homeController.admin);

module.exports = routes;
