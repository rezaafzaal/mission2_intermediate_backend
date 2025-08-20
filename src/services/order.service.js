const Order = require("../models/order.model");

const orderService = {
  getAll: () => Order.getAll(),
  getById: (id) => Order.getById(id),
  create: (data) => Order.create(data),
  update: (id, data) => Order.update(id, data),
  delete: (id) => Order.delete(id),
};

module.exports = orderService;
