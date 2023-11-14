const productRepositories = require("../repositories/product.repository");

exports.getProducts = async () => await productRepositories.findAll();
exports.allProductsPrice = async () => await productRepositories.findAllPrice();

exports.findByName = async (search) => {
  if (!search) {
    return await productRepositories.findAll();
  }

  return await productRepositories.findByName(search);
};

exports.findByPrice = async (query) => {
  const { min, max } = query;
  return await productRepositories.findByPrice(min, max);
};

exports.findById = async (id) => await productRepositories.findById(id);

exports.add = async (product) =>
  await productRepositories.postProduct({
    ...product,
  });

exports.edit = async (id, product, file) => {
  const result = await productRepositories.findById(id);

  if (result) {
    const updated = await productRepositories.putProduct(result.id, {
      ...product,
      image: file ? file.filename : result.image,
    });
    if (updated) {
      return await productRepositories.findById(id);
    }
  }
  return null;
};

exports.delete = async (id) => {
  const result = await productRepositories.findById(id);

  if (result) {
    const deleted = await productRepositories.deleteProduct(result.id);

    if (deleted) {
      return await result;
    }
  } else {
    return null;
  }
};
