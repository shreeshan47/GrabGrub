const express = require("express");
const router = express.Router();

const { addNewUsers } = require("../controllers/users");

router.post('/register', addNewUsers)

module.exports = router;