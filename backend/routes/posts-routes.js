"use strict";

// Middleware Imports
const express = require("express");
const router = express.Router();
const auth = require("../middleware/auth");
const multer = require("../middleware/multer-config");
const sanitizeRequest = require("../middleware/sanitize-middleware");

// Controller
const postCtrl = require("../controllers/posts");

//=================================================================

// Create Posts Routes
router.post("/", sanitizeRequest, auth, multer, postCtrl.createPost);
router.post("/reaction", sanitizeRequest, auth, postCtrl.postReaction);
router.post("/comment", sanitizeRequest, auth, postCtrl.postComment);

// Read Posts Routes
router.get("/", sanitizeRequest, auth, postCtrl.getAllPosts);
router.get("/categories", sanitizeRequest, auth, postCtrl.getCategories);
router.get("/most-liked", sanitizeRequest, auth, postCtrl.getMostLikedPosts);
router.get("/:id", sanitizeRequest, auth, postCtrl.getOnePost);

// Delete Posts Routes
router.delete("/comment/:id", sanitizeRequest, auth, postCtrl.deleteComment);
router.delete("/:id", sanitizeRequest, auth, postCtrl.deletePost);

// Execution
module.exports = router;
