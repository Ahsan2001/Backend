const express = require("express");
const { getProduct, getSingleProduct, createProduct, editProduct, deleteProduct } = require("../controllers/productController")
const router = express.Router();


router.route("/products").get(getProduct)
router.route("/product/:id").get(getSingleProduct)


// Admin Routes 
router.route("/admin/product/new").post(createProduct)
router.route("/admin/product/:id").put(editProduct)
router.route("/admin/product/:id").delete(deleteProduct)


module.exports = router