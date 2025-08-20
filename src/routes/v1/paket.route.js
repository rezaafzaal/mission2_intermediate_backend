const express = require("express");
const router = express.Router();
const paketController = require("../../controllers/paket.controller");

router.get("/", paketController.getAll);
router.get("/:id", paketController.getById);
router.post("/", paketController.create);
router.patch("/:id", paketController.update);
router.delete("/:id", paketController.delete);

module.exports = router;
