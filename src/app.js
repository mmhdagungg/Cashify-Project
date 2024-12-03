const express = require("express");
const userRoutes = require("./features/users/user.route");

const app = express();

app.use(express.json());
app.use("/api/users", userRoutes);

module.exports = app;
