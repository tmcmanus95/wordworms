// server.js with Express
const express = require("express");
const app = express();
const path = require("path");

app.use(express.static(path.join(__dirname)));

const PORT = 3000 || process.env.PORT;
app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});
