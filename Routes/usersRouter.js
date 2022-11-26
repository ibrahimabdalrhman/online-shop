const express = require('express');
const router = express.Router();
const usersController = rerquire('../controllers/usersController');
const authController=require('../controllers/authController')

router.post("/signup", authController.signup);
router.post("/login", authController.login);

router.post("/forgetPassword", authController.forgetPassword);
router.patch("/resetPassword/:token", authController.resetPassword);
router.patch(
  "/updatePassword/",
  authController.protect,
  authController.updatePassword
);
router.patch("/updateMe", authController.protect, userController.updateUser);
router.patch("/deleteMe", authController.protect, userController.deleteUser);




router.route('/').get(usersController.getUsers).post(usersController.createUser);
router.route("/:id").get(userController.getUserById);



module.exports = router;