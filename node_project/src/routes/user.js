const express = require("express");
const router = express.Router();
const { getUser } = require("../controllers/userController");

router.get("/:id", getUser); // Route to get a user

module.exports = router;
