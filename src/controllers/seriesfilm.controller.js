const seriesService = require("../services/seriesfilm.service");

const seriesController = {
  async getAll(req, res) {
    const series = await seriesService.getAll();
    res.json(series);
  },
  async getById(req, res) {
    const seriesItem = await seriesService.getById(req.params.id);
    if (!seriesItem) return res.status(404).json({ message: "Series not found" });
    res.json(seriesItem);
  },
  async create(req, res) {
    const seriesItem = await seriesService.create(req.body);
    res.status(201).json(seriesItem);
  },
  async update(req, res) {
    const seriesItem = await seriesService.update(req.params.id, req.body);
    res.json(seriesItem);
  },
  async delete(req, res) {
    await seriesService.delete(req.params.id);
    res.json({ message: "Series deleted" });
  },
};

module.exports = seriesController;
