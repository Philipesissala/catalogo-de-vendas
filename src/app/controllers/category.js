const database = require("../database/database");

module.exports = {
  async index(req, res) {
    let response = await database.select().into("categorias")
    res.render("admin/categories/index", { data: response });
  },
  create(req, res) {
    res.render("admin/categories/new");
  },

  async save(req, res) {
    const designacao = req.body;
    console.log(designacao)
    if (designacao != "") {
      let response = await database.insert(designacao).into("categorias");
      if (response > 0) {
        console.log("Sucesso")
        res.render("admin/categories/index");
      }
    }
  },
};
