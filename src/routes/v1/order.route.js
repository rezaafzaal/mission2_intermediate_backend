const express = require("express");
const router = express.Router();
const orderController = require("../../controllers/order.controller");

router.get("/", orderController.getAll);
router.get("/:id", orderController.getById);
router.post("/", orderController.create);
router.patch("/:id", orderController.update);
router.delete("/:id", orderController.delete);

module.exports = router;
