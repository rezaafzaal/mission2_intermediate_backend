const pool = require("../configs/db");

const SeriesFilm = {
  async getAll() {
    const [rows] = await pool.query("SELECT * FROM SeriesFilm");
    return rows;
  },
  async getById(id) {
    const [rows] = await pool.query("SELECT * FROM SeriesFilm WHERE film_series_id = ?", [id]);
    return rows[0];
  },
  async create(data) {
    const { judul, tahun_rilis, deskripsi, genre_id, jumlah_episode } = data;
    const [result] = await pool.query(
      "INSERT INTO SeriesFilm (judul, tahun_rilis, deskripsi, genre_id, jumlah_episode) VALUES (?, ?, ?, ?, ?)",
      [judul, tahun_rilis, deskripsi, genre_id, jumlah_episode]
    );
    return { id: result.insertId, ...data };
  },
  async update(id, data) {
    const { judul, tahun_rilis, deskripsi, genre_id, jumlah_episode } = data;
    await pool.query(
      "UPDATE SeriesFilm SET judul=?, tahun_rilis=?, deskripsi=?, genre_id=?, jumlah_episode=? WHERE film_series_id=?",
      [judul, tahun_rilis, deskripsi, genre_id, jumlah_episode, id]
    );
    return { id, ...data };
  },
  async delete(id) {
    await pool.query("DELETE FROM SeriesFilm WHERE film_series_id=?", [id]);
    return { message: "SeriesFilm deleted" };
  },
};

module.exports = SeriesFilm;
