const express = require("express");
const router = express.Router();


const signup = require("../controller/register");
const login = require("../controller/login");


router.post("/api/v1/signup", signup)
router.post("/api/v1/login", login)

module.exports = router;