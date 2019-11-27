const express = require("express");
const app = express();
const dotenv = require("dotenv");
const mongoose = require("mongoose");
//Import Routes
const authRoutes = require("./routes/auth");

dotenv.config();

//Connect to DB
mongoose.connect(
  process.env.DB_CONNECT,
  { useNewUrlParser: true, useUnifiedTopology: true },
  () => console.log("connected to db ...")
);

//Middleware
app.use(express.json());

//Routes Middlewers
app.use("/api/user", authRoutes);

app.listen(3000, () => console.log("Server wenu running on port 3000"));
