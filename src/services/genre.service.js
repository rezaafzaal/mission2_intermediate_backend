const Genre = require("../models/genre.model");

const genreService = {
  getAll: () => Genre.getAll(),
  getById: (id) => Genre.getById(id),
  create: (data) => Genre.create(data),
  update: (id, data) => Genre.update(id, data),
  delete: (id) => Genre.delete(id),
};

module.exports = genreService;
