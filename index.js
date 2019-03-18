const express = require("express");
const server = express();
const db = require("./data/db");
const PORT = 4000;

server.use(express.json());

server.get("/api/users", (req, res) => {
  db.find()
    .then(users => res.status(200).json(users))
    .catch(err => res.status(500).json({message: "Something went wrong"}));
});

server.listen(PORT, console.log(`Port ${PORT} is listening`));
