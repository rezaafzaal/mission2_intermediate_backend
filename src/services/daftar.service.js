const Daftar = require("../models/daftar.model");

const daftarService = {
  getAll: () => Daftar.getAll(),
  getById: (id) => Daftar.getById(id),
  create: (data) => Daftar.create(data),
  update: (id, data) => Daftar.update(id, data),
  delete: (id) => Daftar.delete(id),
};

module.exports = daftarService;
