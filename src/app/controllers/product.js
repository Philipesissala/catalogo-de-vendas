const database = require("../database/database")
module.exports = {
  async index(req, res) {
    const response = await database
      .select(["produtos.id",
        "produtos.designacao",
        "categorias.designacao as categoria",
        "produtos.antigo",
        "produtos.novo"])
      .from("produtos")
      .innerJoin("categorias", "categorias.id", "produtos.categoria_id");
    res.render("admin/index", { datas: response });

  },

  async create(req, res) {
    const categories = await database.select().into("categorias");
    res.render("admin/products/new", { categories });
  },

  async save(req, res) {
    const { designacao, descricao, antigo, atual, categoria_id, imagem } = req.body;
    const response = await database
      .insert({ designacao, descricao, antigo, novo: atual, categoria_id, imagem })
      .into("produtos");
    if (response > 0) {
      res.redirect("/admin/products")
      console.log("Sucesso");
    }
  },
  async edit(req, res) {
    const id = req.params.id;
    const response = await database.select().into("produtos").where("id", id);
    const categories = await database.select().into("categorias");

    res.render("admin/products/edit", { data: response[0], categories })
  },
  async update(req, res) {
    const id = req.params.id;
    const { designacao, descricao, antigo, atual, categoria_id, imagem } = req.body;
    const response = await database
      .update({ designacao, descricao, antigo, novo: atual, categoria_id, imagem })
      .where("id", id)
      .from("produtos");
    if (response > 0) {
      res.redirect("admin/products/");
      console.log("Sucesso")
    }
  }
  ,
  async delete(req, res) {
    const id = req.params.id;
    const response = await database
      .delete()
      .from("produtos")
      .where("id", id);
    if (response > 0) {
      res.redirect("/admin/products")
      console.log("sucesso")
    }
  },
};
