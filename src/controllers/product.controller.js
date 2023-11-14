const productServices = require("../services/product.service");
const cloudinary = require("../utils/cloudinary");
const upload = require("../configs/multer");

exports.getProducts = async (req, res) => {
  res.json(await productServices.getProducts());
};
exports.getProductByTotal = async (req, res) => {
  const result = await productServices.allProductsPrice();
  res.json({ result });
};

exports.getProductsBySearch = async (req, res) => {
  const { search } = req.query;
  if (!search) {
    res.json(await productServices.allProducts());
  } else {
    const result = await productServices.findByName(search);
    result.length > 0 ? res.json(result) : res.status(404).json(result);
  }
};

exports.getProductByPrice = async (req, res) => {
  const result = await productServices.findByPrice(req.query);
  result.length > 0 ? res.json(result) : res.status(404).json(result);
};

exports.getProduct = async (req, res) => {
  const id = req.params.id;
  const result = await productServices.findById(id);
  result ? res.json(result) : res.status(404).json(null);
};

exports.addProduct = async (req, res) => {
  // upload(req, res, async (error) => {
  //   if (error) {
  //     console.log(`error: ${JSON.stringify(error)}`);
  //     return res.status(500).json({ message: error.message });
  //   }
  //   return res.status(201).json(await productServices.add(req.body, req.file));
  // });

  return res.status(201).json(await productServices.add(req.body));
};

exports.editProduct = (req, res) => {
  // upload(req, res, async (error) => {
  //   if (error) {
  //     console.log(`error: ${JSON.stringify(error)}`);
  //     return res.status(500).json({ message: error.message });
  //   }
  //   const result = await productServices.edit(
  //     req.params.id,
  //     req.body,
  //     req.file
  //   );
  //   if (result) {
  //     res.json(result);
  //   } else {
  //     res.status(404).json({});
  //   }
  // });
};

exports.deleteProduct = async (req, res) => {
  const id = req.params.id;
  const result = await productServices.delete(id);
  result ? res.json(result) : res.status(404).json(result);
};
