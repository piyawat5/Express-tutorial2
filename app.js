const express = require("express");
const cors = require("cors");
const app = express();

//Middlewares
app.use(express.json());
app.use(cors());

//Routes api
app.use(require("./src/routes/routes"));

//port
const port = 3500;
app.listen(port, "0.0.0.0", () => {
  console.log(`Listening on port: ${port}`);
});
