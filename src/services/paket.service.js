const Paket = require("../models/paket.model");

const paketService = {
  getAll: () => Paket.getAll(),
  getById: (id) => Paket.getById(id),
  create: (data) => Paket.create(data),
  update: (id, data) => Paket.update(id, data),
  delete: (id) => Paket.delete(id),
};

module.exports = paketService;
