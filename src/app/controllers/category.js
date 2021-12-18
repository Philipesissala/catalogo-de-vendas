module.exports = {
  index(req, res) {
    res.render("admin/categories/index");
  },
  create(req, res) {
    res.render("admin/categories/new");
  },
};
