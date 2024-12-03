const express = require("express");
const { register, login, getUser, logout } = require("./user.controller");
const { authenticateToken } = require("../../global/auth.middleware");
const router = express.Router();

router.post("/register", register);
router.post("/login", login);
router.get("/profile", authenticateToken, getUser);
router.post("/logout", authenticateToken, logout);

module.exports = router;
