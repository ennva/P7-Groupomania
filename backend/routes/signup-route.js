"use strict";

// Middleware Imports
const express = require("express");
const router = express.Router();
const sanitizeRequest = require("../middleware/sanitize-middleware");

// Controller
const userCtrl = require("../controllers/signup");

//=================================================================

// Create User Route
router.post("/", sanitizeRequest ,userCtrl.signup);

// Execution
module.exports = router;
