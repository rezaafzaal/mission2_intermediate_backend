const pool = require("../configs/db");

const Genre = {
  async getAll() {
    const [rows] = await pool.query("SELECT * FROM Genre");
    return rows;
  },
  async getById(id) {
    const [rows] = await pool.query("SELECT * FROM Genre WHERE genre_id = ?", [id]);
    return rows[0];
  },
  async create(data) {
    const { nama_genre } = data;
    const [result] = await pool.query(
      "INSERT INTO Genre (nama_genre) VALUES (?)",
      [nama_genre]
    );
    return { id: result.insertId, ...data };
  },
  async update(id, data) {
    const { nama_genre } = data;
    await pool.query(
      "UPDATE Genre SET nama_genre=? WHERE genre_id=?",
      [nama_genre, id]
    );
    return { id, ...data };
  },
  async delete(id) {
    await pool.query("DELETE FROM Genre WHERE genre_id=?", [id]);
    return { message: "Genre deleted" };
  },
};

module.exports = Genre;
