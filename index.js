const express = require("express");
const app = express();
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const cors = require('cors')
//Import Routes
const authRoutes = require("./routes/auth");
const favoritesRoutes = require("./routes/favorites");

dotenv.config();

//Connect to DB
mongoose.connect(
  process.env.DB_CONNECT,
  { useNewUrlParser: true, useUnifiedTopology: true },
  () => console.log("connected to db ...")
);

//Middleware
app.use(express.json());
app.use(cors());

//Routes Middlewers
app.use("/api/user", authRoutes);
app.use("/api/favorites", favoritesRoutes);

app.listen(3000, () => console.log("Server wenu running on port 3000"));
