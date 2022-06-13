

const express = require('express');
const router = express.Router();

const passwordController = require('../Controllers/passwordController');

router.post("/addPassword", passwordController.postPassword);
router.get("/showAllPasswords", passwordController.showAllPasswords);
router.post("/decryptPassword", passwordController.decryptedPassword);





module.exports = router;