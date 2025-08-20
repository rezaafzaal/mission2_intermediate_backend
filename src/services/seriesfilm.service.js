const SeriesFilm = require("../models/seriesfilm.model");

const seriesfilmService = {
  getAll: () => SeriesFilm.getAll(),
  getById: (id) => SeriesFilm.getById(id),
  create: (data) => SeriesFilm.create(data),
  update: (id, data) => SeriesFilm.update(id, data),
  delete: (id) => SeriesFilm.delete(id),
};

module.exports = seriesfilmService;
