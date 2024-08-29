const express = require("express");
const { signup, signin,storeOptions, saveScores } = require("../controllers/signINUP"); 

const router = express.Router();

// Route for signup
router.post("/signup", signup);

// Route for signin (login)
router.post("/signin", signin);

router.post("/store-options", storeOptions);
router.post("/save-scores", saveScores);

module.exports = router;
