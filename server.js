const express = require("express");
const connectDB = require("./db");
const dotenv = require("dotenv");

const userRoutes = require("./routes/userRoutes");
dotenv.config();

const app = express();

//Connect to database

connectDB();

//Middleware to Parse JSON

app.use(express.json());
app.use("/api", userRoutes);

//Routes

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
