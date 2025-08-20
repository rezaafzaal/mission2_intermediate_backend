const express = require("express");
const router = express.Router();
const daftarController = require("../../controllers/daftar.controller");

router.get("/", daftarController.getAll);
router.get("/:id", daftarController.getById);
router.post("/", daftarController.create);
router.patch("/:id", daftarController.update);
router.delete("/:id", daftarController.delete);

module.exports = router;
