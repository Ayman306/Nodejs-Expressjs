const express = require("express");
require("./db/conn");
const studentRouter = require("./routers/student");

const app = express();
const port = process.env.PORT || 8000;

app.use(express.json());
// register the router
app.use(studentRouter);

app.listen(port, () => {
  console.log(`Connection is set at ${port}`);
});
