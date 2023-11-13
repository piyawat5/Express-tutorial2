const productServices = require("../services/product.service");

exports.getProducts = async (req, res) => {
  res.json(await productServices.getProducts());
};
exports.getProductById = (req, res) => {
  res.json(productServices.getProductById(req));
};
exports.postProduct = (req, res) => {
  res.json(productServices.postProduct(req));
};
exports.putProduct = (req, res) => {
  res.json(productServices.putProduct(req));
};
exports.deleteProduct = (req, res) => {
  res.json(productServices.deleteProduct(req));
};
