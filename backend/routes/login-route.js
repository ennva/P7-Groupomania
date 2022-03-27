"use strict";

// Middleware Imports
const express = require("express");
const router = express.Router();
const bouncer = require("express-bouncer")(10000, 900000);
const sanitizeRequest = require("../middleware/sanitize-middleware");

// Controller
const userCtrl = require("../controllers/login");

//=================================================================

// Login User Route
router.post("/", sanitizeRequest , bouncer.block, userCtrl.login);

// Execution
module.exports = router;
