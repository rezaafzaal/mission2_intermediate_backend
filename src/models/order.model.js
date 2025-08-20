const pool = require("../configs/db");

const Order = {
  async getAll() {
    const [rows] = await pool.query("SELECT * FROM `Order`");
    return rows;
  },
  async getById(id) {
    const [rows] = await pool.query("SELECT * FROM `Order` WHERE order_id = ?", [id]);
    return rows[0];
  },
  async create(data) {
    const { user_id, paket_id, tanggal_order, pembayaran_id } = data;
    const [result] = await pool.query(
      "INSERT INTO `Order` (user_id, paket_id, tanggal_order, pembayaran_id) VALUES (?, ?, ?, ?)",
      [user_id, paket_id, tanggal_order, pembayaran_id]
    );
    return { id: result.insertId, ...data };
  },
  async update(id, data) {
    const { user_id, paket_id, tanggal_order, pembayaran_id } = data;
    await pool.query(
      "UPDATE `Order` SET user_id=?, paket_id=?, tanggal_order=?, pembayaran_id=? WHERE order_id=?",
      [user_id, paket_id, tanggal_order, pembayaran_id, id]
    );
    return { id, ...data };
  },
  async delete(id) {
    await pool.query("DELETE FROM `Order` WHERE order_id=?", [id]);
    return { message: "Order deleted" };
  },
};

module.exports = Order;
