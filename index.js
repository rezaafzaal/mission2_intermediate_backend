const express = require("express");
const app = express();
const PORT = 3000;

app.use(express.json());

app.get("/", (req, res) => {
  res.send(" API Chill berjalan");
});

app.use("/api/v1", require("./src/routes/v1"));


app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
