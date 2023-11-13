const productRepositories = require("../repositories/product.repository");

exports.getProducts = async () => await productRepositories.findAll();
exports.getProductById = () => {
  return;
};

exports.postProduct = () => {
  return;
};

exports.putProduct = () => {
  return;
};

exports.deleteProduct = () => {
  return;
};
