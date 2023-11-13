const router = require("express").Router();
const productControllers = require("../controllers/product.controller");

router.get("/", productControllers.getProducts);

router.get("/total", productControllers.getProductByTotal);

router.get("/search", productControllers.getProductsBySearch);

router.get("/price", productControllers.getProductByPrice);

router.get("/:id", productControllers.getProduct);

router.post("/", productControllers.addProduct);

router.put("/:id", productControllers.editProduct);

router.delete("/:id", productControllers.deleteProduct);

module.exports = router;
