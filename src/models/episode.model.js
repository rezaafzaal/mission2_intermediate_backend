const pool = require("../configs/db");

const Episode = {
  async getAll() {
    const [rows] = await pool.query("SELECT * FROM EpisodeMovie");
    return rows;
  },
  async getById(id) {
    const [rows] = await pool.query("SELECT * FROM EpisodeMovie WHERE episode_id = ?", [id]);
    return rows[0];
  },
  async create(data) {
    const { film_series_id, judul, durasi_menit, sinopsis, rating } = data;
    const [result] = await pool.query(
      "INSERT INTO EpisodeMovie (film_series_id, judul, durasi_menit, sinopsis, rating) VALUES (?, ?, ?, ?, ?)",
      [film_series_id, judul, durasi_menit, sinopsis, rating]
    );
    return { id: result.insertId, ...data };
  },
  async update(id, data) {
    const { film_series_id, judul, durasi_menit, sinopsis, rating } = data;
    await pool.query(
      "UPDATE EpisodeMovie SET film_series_id=?, judul=?, durasi_menit=?, sinopsis=?, rating=? WHERE episode_id=?",
      [film_series_id, judul, durasi_menit, sinopsis, rating, id]
    );
    return { id, ...data };
  },
  async delete(id) {
    await pool.query("DELETE FROM EpisodeMovie WHERE episode_id=?", [id]);
    return { message: "Episode deleted" };
  },
};

module.exports = Episode;
