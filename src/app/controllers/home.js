const database = require("../database/database");
module.exports = {
  async index(req, res) {
    const response = await database.select().into("produtos");
    const categories = await database.select().into("categorias");
    res.render("index", { datas: response, categories });
  },
  async categorie(req, res) {
    const slug = req.params.slug;
    const response = await database
      .select([
        "produtos.id",
        "produtos.designacao",
        "produtos.antigo",
        "produtos.novo",
        "produtos.imagem",
      ])
      .from("produtos")
      .innerJoin("categorias", "categorias.id", "produtos.categoria_id")
      .where("categorias.slug", slug);
    const categories = await database.select().into("categorias");
    res.render("index", { datas: response, categories });
  },

  admin(req, res) {
    res.render("admin/index");
  },
};
