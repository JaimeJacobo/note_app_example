require("dotenv").config();

const express = require("express");
const app = express();
const database = require("./config.js");

app.use(express.json());
app.use(express.urlencoded());
app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "http://localhost:3000");
  res.setHeader("Access-Control-Allow-Credentials", true);
  next();
});

database.connect((err) => {
  if (err) {
    console.error("Error connecting: " + err.stack);
  } else {
    console.log("Connected succesfully to external database");
  }
});

// GET all notes

app.get("/get-notes", (req, res) => {
  database
    .promise()
    .query("SELECT * FROM notes")
    .then((data) => {
      res.send(data[0]);
    })
    .catch((err) => {
      console.log(err);
    });
});

// POST create new note (name: '', content: '')
app.post("/new-note", (req, res) => {
  const { name, content } = req.body;
  database
    .promise()
    .query("INSERT INTO notes (name, content) VALUES(?, ?)", [name, content])
    .then((data) => res.send(data))
    .catch((err) => console.log(err));
});

// DELETE note
app.delete("/delete-note/:id", (req, res) => {
  const note = req.params.id;
  database
    .promise()
    .query("DELETE FROM notes WHERE id = ?", [note])
    .then((data) => res.send(data))
    .catch((err) => console.log(err));
});

// UPDATE note

app.listen(5000, () => {
  console.log("Server is ready in PORT 5000");
});

//NAMES
// Alex
// Sasmitha
// Salvo
// Pallavi
// Lorianne
// G
// Nat
// Victor
