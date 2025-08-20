const paketService = require("../services/paket.service");

const paketController = {
  async getAll(req, res) {
    const pakets = await paketService.getAll();
    res.json(pakets);
  },
  async getById(req, res) {
    const paket = await paketService.getById(req.params.id);
    if (!paket) return res.status(404).json({ message: "Paket not found" });
    res.json(paket);
  },
  async create(req, res) {
    const paket = await paketService.create(req.body);
    res.status(201).json(paket);
  },
  async update(req, res) {
    const paket = await paketService.update(req.params.id, req.body);
    res.json(paket);
  },
  async delete(req, res) {
    await paketService.delete(req.params.id);
    res.json({ message: "Paket deleted" });
  },
};

module.exports = paketController;
