const express = require("express");
const router = express.Router();
const episodeController = require("../../controllers/episode.controller");

router.get("/", episodeController.getAll);
router.get("/:id", episodeController.getById);
router.post("/", episodeController.create);
router.patch("/:id", episodeController.update);
router.delete("/:id", episodeController.delete);

module.exports = router;
