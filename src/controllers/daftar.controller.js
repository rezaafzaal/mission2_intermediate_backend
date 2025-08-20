const daftarService = require("../services/daftar.service");

const daftarController = {
  async getAll(req, res) {
    const daftars = await daftarService.getAll();
    res.json(daftars);
  },
  async getById(req, res) {
    const daftar = await daftarService.getById(req.params.id);
    if (!daftar) return res.status(404).json({ message: "Daftar not found" });
    res.json(daftar);
  },
  async create(req, res) {
    const daftar = await daftarService.create(req.body);
    res.status(201).json(daftar);
  },
  async update(req, res) {
    const daftar = await daftarService.update(req.params.id, req.body);
    res.json(daftar);
  },
  async delete(req, res) {
    await daftarService.delete(req.params.id);
    res.json({ message: "Daftar deleted" });
  },
};

module.exports = daftarController;
