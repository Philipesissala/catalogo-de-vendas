const express = require("express");
const routes = express.Router();
const multer = require("multer");
const path = require("path");

const products = require("../controllers/product");

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "upload/");
  },
  filename: function (req, file, cb) {
    cb(null, file.originalname + Date.now() + path.extname(file.originalname));
  },
});
const upload = multer({ storage });

routes.get("/admin/products", products.index);
routes.get("/admin/products/new", products.create);
routes.post("/admin/products/save", upload.single("imagem"), products.save);
routes.post("/admin/products/delete/:id", products.delete);
routes.get("/admin/products/edit/:id", products.edit);
routes.post("/admin/products/update/:id",upload.single("imagem"), products.update);

module.exports = routes;
