module.exports = {
  index(req, res) {
    res.render("admin/categories/index");
  },
  create(req, res) {
    res.render("admin/categories/new");
  },

  save(req, res) {
    const designacao = req.body;

    console.log(designacao);
  },
};
