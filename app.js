const express = require("express");
const userRoutes = require("./src/features/users/user.route");
const dkRoutes = require("./src/features/data_keuangan/dk.route"); // Import the dataKeuangan routes

const app = express();

app.use(express.json());

app.use("/api/users", userRoutes);  // User-related routes
app.use("/api/data", dkRoutes);     // DataKeuangan-related routes

module.exports = app;
