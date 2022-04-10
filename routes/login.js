const express = require("express");

const { registerView, loginView } = require("../controllers/login.controller");

const router = express.Router();
router.get("/register", registerView);
router.get("/", loginView);

module.exports = router;
