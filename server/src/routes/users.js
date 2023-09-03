const express = require("express");
const router = express.Router();

const { addNewUsers, loginUsers } = require("../controllers/users");

router.post('/register', addNewUsers)
router.post('/login', loginUsers)

module.exports = router;