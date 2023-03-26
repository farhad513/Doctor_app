const express = require("express");
const {
  registerController,
  loginController,
  authController,
} = require("../controllers/userControllers");
const authMiddle = require("../middlewares/authMiddle");

const router = express.Router();

// login Router
router.post("/login", loginController);
// Register Router
router.post("/register", registerController);
router.post("/getUserData", authMiddle, authController);
module.exports = router;
