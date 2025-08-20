const User = require("../models/user.model");

const userService = {
  getAll: () => User.getAll(),
  getById: (id) => User.getById(id),
  create: (data) => User.create(data),
  update: (id, data) => User.update(id, data),
  delete: (id) => User.delete(id),
};

module.exports = userService;
