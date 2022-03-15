const express = require("express");
const dotenv = require("dotenv");

//mongose connection
dotenv.config({ path: "./config.env" });
require("./db/conn");

const app = express();

app.listen("8800", () => {
  console.log("Backend is running.");
});
