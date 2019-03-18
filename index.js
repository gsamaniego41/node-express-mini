const express = require("express");
const server = express();
const db = require("./data/db");
const PORT = 4000;

server.use(express.json());

server.listen(PORT, console.log(`Port ${PORT} is listening`));
