const express = require("express");
const router = express.Router();

router.use("/user", require("./user.route"));
router.use("/paket", require("./paket.route"));
router.use("/pembayaran", require("./pembayaran.route"));
router.use("/order", require("./order.route"));
router.use("/genre", require("./genre.route"));
router.use("/seriesfilm", require("./seriesfilm.route"));
router.use("/episode", require("./episode.route"));
router.use("/daftar", require("./daftar.route"));

module.exports = router;
