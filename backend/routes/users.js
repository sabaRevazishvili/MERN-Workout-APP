const express = require("express");
const { LoginUSer, SignupUSer } = require("../controllers/userController");

const router = express.Router();

//login route
router.post("/login", LoginUSer);

//signup route

router.post("/signup", SignupUSer);

module.exports = router;
