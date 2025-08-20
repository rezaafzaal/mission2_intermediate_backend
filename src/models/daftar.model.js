const pool = require("../configs/db");

const DaftarSaya = {
  async getAll() {
    const [rows] = await pool.query("SELECT * FROM Daftar_Saya");
    return rows;
  },
  async getById(id) {
    const [rows] = await pool.query("SELECT * FROM Daftar_Saya WHERE list_id = ?", [id]);
    return rows[0];
  },
  async create(data) {
    const { user_id, film_series_id } = data;
    const [result] = await pool.query(
      "INSERT INTO Daftar_Saya (user_id, film_series_id) VALUES (?, ?)",
      [user_id, film_series_id]
    );
    return { id: result.insertId, ...data };
  },
  async update(id, data) {
    const { user_id, film_series_id } = data;
    await pool.query(
      "UPDATE Daftar_Saya SET user_id=?, film_series_id=? WHERE list_id=?",
      [user_id, film_series_id, id]
    );
    return { id, ...data };
  },
  async delete(id) {
    await pool.query("DELETE FROM Daftar_Saya WHERE list_id=?", [id]);
    return { message: "Daftar Saya deleted" };
  },
};

module.exports = DaftarSaya;
