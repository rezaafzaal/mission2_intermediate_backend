const genreService = require("../services/genre.service");

const genreController = {
  async getAll(req, res) {
    const genres = await genreService.getAll();
    res.json(genres);
  },
  async getById(req, res) {
    const genre = await genreService.getById(req.params.id);
    if (!genre) return res.status(404).json({ message: "Genre not found" });
    res.json(genre);
  },
  async create(req, res) {
    const genre = await genreService.create(req.body);
    res.status(201).json(genre);
  },
  async update(req, res) {
    const genre = await genreService.update(req.params.id, req.body);
    res.json(genre);
  },
  async delete(req, res) {
    await genreService.delete(req.params.id);
    res.json({ message: "Genre deleted" });
  },
};

module.exports = genreController;
