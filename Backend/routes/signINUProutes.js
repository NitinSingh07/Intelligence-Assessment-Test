const express = require("express");
const { signup, signin } = require("../controllers/signINUP"); 

const router = express.Router();

// Route for signup
router.post("/signup", signup);

// Route for signin (login)
router.post("/signin", signin);

module.exports = router;
