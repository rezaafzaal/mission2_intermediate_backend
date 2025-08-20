const express = require("express");
const router = express.Router();
const genreController = require("../../controllers/genre.controller");

router.get("/", genreController.getAll);
router.get("/:id", genreController.getById);
router.post("/", genreController.create);
router.patch("/:id", genreController.update);
router.delete("/:id", genreController.delete);

module.exports = router;
