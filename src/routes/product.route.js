const router = require("express").Router();
const productControllers = require("../controllers/product.controller");

router.get("/", productControllers.getProducts);

router.get("/:id", productControllers.getProductById);

router.post("/create", productControllers.postProduct);

router.put("/edit/:id", productControllers.putProduct);

router.delete("/delete/:id", productControllers.deleteProduct);

module.exports = router;
