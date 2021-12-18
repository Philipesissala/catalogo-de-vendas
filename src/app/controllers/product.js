module.exports = {
  index(req, res) {
    res.render("admin/index");
  },

  create(req, res) {
    res.render("admin/products/new");
  },
};
