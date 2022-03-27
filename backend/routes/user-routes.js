"use strict";

// Middleware Imports

const express = require("express");
const router = express.Router();
const auth = require("../middleware/auth");
const multer = require("../middleware/multer-config");
const sanitizeRequest = require("../middleware/sanitize-middleware");

// Controller
const userCtrl = require("../controllers/user");

//=================================================================

// Read User Route
router.get("/:id", sanitizeRequest, auth, userCtrl.getUserProfile);

// Update User Route
router.patch("/update", sanitizeRequest, auth, multer, userCtrl.updateUserProfile);
router.put("/update", sanitizeRequest, auth, userCtrl.updatePassword);

// Delete User Route
router.delete("/:id", sanitizeRequest, auth, userCtrl.deleteProfile);

// Execution
module.exports = router;
