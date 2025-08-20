const episodeService = require("../services/episode.service");

const episodeController = {
  async getAll(req, res) {
    const episodes = await episodeService.getAll();
    res.json(episodes);
  },
  async getById(req, res) {
    const episode = await episodeService.getById(req.params.id);
    if (!episode) return res.status(404).json({ message: "Episode not found" });
    res.json(episode);
  },
  async create(req, res) {
    const episode = await episodeService.create(req.body);
    res.status(201).json(episode);
  },
  async update(req, res) {
    const episode = await episodeService.update(req.params.id, req.body);
    res.json(episode);
  },
  async delete(req, res) {
    await episodeService.delete(req.params.id);
    res.json({ message: "Episode deleted" });
  },
};

module.exports = episodeController;
