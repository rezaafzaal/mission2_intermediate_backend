const Episode = require("../models/episode.model");

const episodeService = {
  getAll: () => Episode.getAll(),
  getById: (id) => Episode.getById(id),
  create: (data) => Episode.create(data),
  update: (id, data) => Episode.update(id, data),
  delete: (id) => Episode.delete(id),
};

module.exports = episodeService;
