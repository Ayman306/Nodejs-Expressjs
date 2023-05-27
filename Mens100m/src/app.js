const express = require("express");
require("../src/db/conn");
const router = require("../src/routers/men");
const app = express();
// const router = require("../src/routers/men");
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(router);
app.listen(PORT, () => {
  console.log(`Connected to ${PORT}`);
});
