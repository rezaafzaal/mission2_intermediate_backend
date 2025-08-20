const pool = require("../configs/db");

const Paket = {
  async getAll() {
    const [rows] = await pool.query("SELECT * FROM Paket");
    return rows;
  },
  async getById(id) {
    const [rows] = await pool.query("SELECT * FROM Paket WHERE paket_id = ?", [id]);
    return rows[0];
  },
  async create(data) {
    const { nama_paket, harga_paket, durasi_paket } = data;
    const [result] = await pool.query(
      "INSERT INTO Paket (nama_paket, harga_paket, durasi_paket) VALUES (?, ?, ?)",
      [nama_paket, harga_paket, durasi_paket]
    );
    return { id: result.insertId, ...data };
  },
  async update(id, data) {
    const { nama_paket, harga_paket, durasi_paket } = data;
    await pool.query(
      "UPDATE Paket SET nama_paket=?, harga_paket=?, durasi_paket=? WHERE paket_id=?",
      [nama_paket, harga_paket, durasi_paket, id]
    );
    return { id, ...data };
  },
  async delete(id) {
    await pool.query("DELETE FROM Paket WHERE paket_id=?", [id]);
    return { message: "Paket deleted" };
  },
};

module.exports = Paket;
