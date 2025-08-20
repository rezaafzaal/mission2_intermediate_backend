const Pembayaran = require("../models/pembayaran.model");

const pembayaranService = {
  getAll: () => Pembayaran.getAll(),
  getById: (id) => Pembayaran.getById(id),
  create: (data) => Pembayaran.create(data),
  update: (id, data) => Pembayaran.update(id, data),
  delete: (id) => Pembayaran.delete(id),
};

module.exports = pembayaranService;
