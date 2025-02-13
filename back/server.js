const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();

const app = express();
app.use(express.json());
app.use(cors());

mongoose.connect(process.env.MONGO_URI,)
.then(() => console.log("MongoDB connected"))
  .catch(err => console.log(err));

const authRoutes = require("./routes/authRoutes.js");
app.use("/api/auth", authRoutes);

app.listen(5001, () => console.log("Server running on port 5001"));