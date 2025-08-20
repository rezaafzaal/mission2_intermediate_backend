const userService = require("../services/user.service");

const userController = {
  async getAll(req, res) {
    const users = await userService.getAll();
    res.json(users);
  },
  async getById(req, res) {
    const user = await userService.getById(req.params.id);
    if (!user) return res.status(404).json({ message: "User not found" });
    res.json(user);
  },
  async create(req, res) {
    const user = await userService.create(req.body);
    res.status(201).json(user);
  },
  async update(req, res) {
    const user = await userService.update(req.params.id, req.body);
    res.json(user);
  },
  async delete(req, res) {
    await userService.delete(req.params.id);
    res.json({ message: "User deleted" });
  },
};

module.exports = userController;
