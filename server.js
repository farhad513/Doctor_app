const express = require("express");
const app = express();
const dotenv = require("dotenv");
const connectDB = require("./config/db");
const morgan = require("morgan");
const user = require("./routes/userRoutes");

// config
dotenv.config();
// PORT
const port = process.env.PORT || 5000;

// Middlewares
app.use(express.json());
app.use(morgan("dev"));

// Database

connectDB();

// routes
app.use("/api/v1/user", user);

app.listen(port, (req, res) => {
  console.log(`Server is Running on port ${port}`);
});
