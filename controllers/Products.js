const Products = require("../models/Products");

const index = (req, res) => {
  const products = Products.all();
  res.render("products/index", { products });
  //res.json(products);
};

const form = (req, res) => {
  //res.send(`Products.form`);
  if (req.params.id) {
    const product = Products.find(req.params.id);
    res.render("products/edit", { product });
  } else {
    res.render("products/create");
  }
};

const show = (req, res) => {
  const product = Products.find(req.params.id);
  res.render("products/show", { product });
  //res.json(product);
};

const create = (req, res) => {
  const product = Products.create(req.body);
  res.redirect("/products/" + product.id);
  //res.json(product);
};

const update = (req, res) => {
  //Products.update(req.params.id, req.body);
  res.redirect("/products/" + req.params.id);
  //res.json(product);
};

const remove = (req, res) => {
  Products.remove(req.params.id);
  res.redirect("/products");
  //res.json(products);
};

module.exports = { index, form, show, create, update, remove };
