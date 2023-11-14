const router = require("express").Router();
const productControllers = require("../controllers/product.controller");
const cloudinary = require("../utils/cloudinary");

router.get("/", productControllers.getProducts);

router.get("/total", productControllers.getProductByTotal);

router.get("/search", productControllers.getProductsBySearch);

router.get("/price", productControllers.getProductByPrice);

router.get("/:id", productControllers.getProduct);

router.post("/", productControllers.addProduct);

router.put("/:id", productControllers.editProduct);

router.delete("/:id", productControllers.deleteProduct);

router.post("/uploadImage", (req, res) => {
  cloudinary(req.body.image)
    .then((url) => res.send(url))
    .catch((err) => res.status(500).send(err));
});

module.exports = router;
