const router = require("express").Router();
const fs = require("fs");

// reads the db.json file and retuns all saved notes as JSON
router.get("/api/notes", async (req, res) => {
  const db = await JSON.parse(fs.readFileSync("db/db.json", "utf8"));
  res.json(db);
});

// Receives a new note to save on the request body, adds it to the db.json file, 
// then returns the new note to the client.
router.post("/api/notes", (req, res) => {
  const db = JSON.parse(fs.readFileSync("db/db.json", "utf8"));
  const note = req.body;
  note.id = (db.length + 1).toString();

  db.push(note);
  fs.writeFileSync("db/db.json", JSON.stringify(db));
  res.json(db);
});

// Delete route
router.delete("/api/notes/:id", (req, res) => {
    const noteId = req.params.id;
    let db = JSON.parse(fs.readFileSync("db/db.json", "utf8"));

    // Find the index of the note with the given ID
    const noteIndex = db.findIndex((note) => note.id === noteId);

    // If note is not found, remove it from the array
    if 
});

module.exports = router;
