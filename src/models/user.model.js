const pool = require("../configs/db");

const User = {
  async getAll() {
    const [rows] = await pool.query("SELECT * FROM User");
    return rows;
  },
  async getById(id) {
    const [rows] = await pool.query("SELECT * FROM User WHERE user_id = ?", [id]);
    return rows[0];
  },
  async create(data) {
    const { username, email, password } = data;
    const [result] = await pool.query(
      "INSERT INTO User (username, email, password) VALUES (?, ?, ?)",
      [username, email, password]
    );
    return { id: result.insertId, ...data };
  },
  async update(id, data) {
    const { username, email, password } = data;
    await pool.query(
      "UPDATE User SET username=?, email=?, password=? WHERE user_id=?",
      [username, email, password, id]
    );
    return { id, ...data };
  },
  async delete(id) {
    await pool.query("DELETE FROM User WHERE user_id=?", [id]);
    return { message: "User deleted" };
  },
};

module.exports = User;
