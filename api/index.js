const express = require("express");
const dotenv = require("dotenv");
const authRoute = require("./routes/auth");
const userRoute = require("./routes/users");

//mongose connection
dotenv.config({ path: "./config.env" });
require("./db/conn");

const app = express();

app.use(express.json());

app.use("/api/auth", authRoute);
app.use("/api/users", userRoute);

app.listen("8800", () => {
  console.log("Backend is running.");
});
