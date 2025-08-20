const pembayaranService = require("../services/pembayaran.service");

const pembayaranController = {
  async getAll(req, res) {
    const pembayarans = await pembayaranService.getAll();
    res.json(pembayarans);
  },
  async getById(req, res) {
    const pembayaran = await pembayaranService.getById(req.params.id);
    if (!pembayaran) return res.status(404).json({ message: "Pembayaran not found" });
    res.json(pembayaran);
  },
  async create(req, res) {
    const pembayaran = await pembayaranService.create(req.body);
    res.status(201).json(pembayaran);
  },
  async update(req, res) {
    const pembayaran = await pembayaranService.update(req.params.id, req.body);
    res.json(pembayaran);
  },
  async delete(req, res) {
    await pembayaranService.delete(req.params.id);
    res.json({ message: "Pembayaran deleted" });
  },
};

module.exports = pembayaranController;
