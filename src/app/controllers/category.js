const database = require("../database/database");
const slugify = require("slugify");

module.exports = {
  async index(req, res) {
    let response = await database.select().into("categorias");
    res.render("admin/categories/index", { datas: response });
  },
  create(req, res) {
    res.render("admin/categories/new");
  },

  async save(req, res) {
    const designacao = req.body.designacao;
    console.log(designacao)
    const slug = slugify(designacao);
    if (designacao != "") {
      let response = await database.insert({designacao, slug}).into("categorias");
      if (response > 0) {
        res.redirect("/admin/categories");
      }
    }
  },
  async delete(req, res) {
    const id = req.params.id;
    let response = await database.from("categorias").where("id", id).delete();
    if (response > 0) {
      res.redirect("/admin/categories");
    }
  },
  async edit(req, res) {
    let id = req.params.id;
    let response = await database.select().into("categorias").where("id", id);
    res.render("admin/categories/edit", { data: response[0] });
  },
  async update(req, res) {
    let id = req.params.id;
    let designacao = req.body.designacao;

    let response = await database
      .update({ designacao: designacao })
      .where("id", id)
      .table("categorias");
    if (response > 0) {
      res.redirect("/admin/categories");
    }
  },
};
