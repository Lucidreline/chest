const express = require("express");
const bodyParser = require("body-parser");

const config = require("config");

const connectDB = require("./config/db");

const app = express();

connectDB();

app.use(bodyParser.json());

// routes
app.use("/api/items", require("./routes/items"));

app.listen(config.get("port"), () => {
  console.log(`server online on port ${config.get("port")}`);
});
