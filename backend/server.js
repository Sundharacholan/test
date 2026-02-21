const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());

app.get("/message", (req, res) => {
  res.json({ message: "Backend connected from Render 🚀" });
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});