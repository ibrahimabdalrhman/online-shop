const express = require("express");
const router = express.Router();
const productsController = require('../controllers/productsController');
const authController = require('../controllers/authController');


router
  .route("/")
  .get(authController.protect.productsController.getProducts)
  .post(productsController.createProduct);


router.route('/:id')
    .get(productsController.getProductsById)
    .patch(productsController.updateProduct)
    .delete(authController.protect,authController.restrictTo('admin'),productsController.removeProduct);

module.exports=router