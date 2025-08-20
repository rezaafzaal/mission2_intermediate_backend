const orderService = require("../services/order.service");

const orderController = {
  async getAll(req, res) {
    const orders = await orderService.getAll();
    res.json(orders);
  },
  async getById(req, res) {
    const order = await orderService.getById(req.params.id);
    if (!order) return res.status(404).json({ message: "Order not found" });
    res.json(order);
  },
  async create(req, res) {
    const order = await orderService.create(req.body);
    res.status(201).json(order);
  },
  async update(req, res) {
    const order = await orderService.update(req.params.id, req.body);
    res.json(order);
  },
  async delete(req, res) {
    await orderService.delete(req.params.id);
    res.json({ message: "Order deleted" });
  },
};

module.exports = orderController;
