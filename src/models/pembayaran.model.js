const pool = require("../configs/db");

const Pembayaran = {
  async getAll() {
    const [rows] = await pool.query("SELECT * FROM Pembayaran");
    return rows;
  },
  async getById(id) {
    const [rows] = await pool.query("SELECT * FROM Pembayaran WHERE pembayaran_id = ?", [id]);
    return rows[0];
  },
  async create(data) {
    const { metode_pembayaran, status } = data;
    const [result] = await pool.query(
      "INSERT INTO Pembayaran (metode_pembayaran, status) VALUES (?, ?)",
      [metode_pembayaran, status]
    );
    return { id: result.insertId, ...data };
  },
  async update(id, data) {
    const { metode_pembayaran, status } = data;
    await pool.query(
      "UPDATE Pembayaran SET metode_pembayaran=?, status=? WHERE pembayaran_id=?",
      [metode_pembayaran, status, id]
    );
    return { id, ...data };
  },
  async delete(id) {
    await pool.query("DELETE FROM Pembayaran WHERE pembayaran_id=?", [id]);
    return { message: "Pembayaran deleted" };
  },
};

module.exports = Pembayaran;
