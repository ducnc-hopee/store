const express = require("express");
const router = express.Router();
const product = require("../controller/product");

router.get("/", product.getAllProducts);
router.get("/filters", product.getFiltersOptions);
router.get("/category/:categoryId", product.getProductsInCategory);
router.get("/:id", product.getProduct);
router.post("/", product.addProduct);
router.put("/:id", product.editProduct);
router.patch("/:id", product.editProduct);
router.delete("/:id", product.deleteProduct);


module.exports = router;
