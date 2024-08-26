const express = require("express");
const app = express();
const dotenv = require("dotenv");
dotenv.config();
require("./connection/db");
const cors = require("cors");

app.use(cors()); // Enable CORS for all routes

const signINUProutes = require("./routes/signINUProutes");
// Define the port
const PORT = process.env.PORT || 3000;

// Middleware to parse incoming JSON requests
app.use(express.json());
// Start the server
app.use("/", signINUProutes);
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
