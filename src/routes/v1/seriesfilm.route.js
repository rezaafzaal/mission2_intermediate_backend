const express = require("express");
const router = express.Router();
const seriesController = require("../../controllers/seriesfilm.controller");

router.get("/", seriesController.getAll);
router.get("/:id", seriesController.getById);
router.post("/", seriesController.create);
router.patch("/:id", seriesController.update);
router.delete("/:id", seriesController.delete);

module.exports = router;
