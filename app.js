const express = require("express");
const cors = require("cors");
const app = express();

//Middlewares
app.use(express.json());
app.use(cors());
app.use("/image", express.static("./images"));

//Routes api
app.use(require("./src/routes/routes"));

//port
const port = 3500;
app.listen(port, () => {
  console.log(`Listening on port: ${port}`);
});
