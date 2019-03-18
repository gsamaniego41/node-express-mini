const express = require("express");
const server = express();
const db = require("./data/db");
const PORT = 4000;

server.use(express.json());

const message = "Oops something went wrong";

server.get("/api/users", (req, res) => {
  db.find()
    .then(users => res.status(200).json(users))
    .catch(err => res.status(500).json({message}));
});

server.post("/api/users", (req, res) => {
  const newUser = req.body;
  db.insert(newUser)
    .then(user => res.status(201).json(user))
    .catch(err => res.status(500).json({message}));
});

server.delete("/api/users/:id", (req, res) => {
  const {id} = req.params;
  db.remove(id)
    .then(count => res.status(200).json(count))
    .catch(err => res.status(500).json({message}));
});

server.listen(PORT, console.log(`Port ${PORT} is listening`));
