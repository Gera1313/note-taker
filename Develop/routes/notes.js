const router = require('express').Router();
const fs = require('fs');
// const path = require('path');
// const db = require("../db/db.json");

router.get("/api/notes", async (req, res) => {
    const db = await JSON.parse(fs.readFileSync("db/db.json", "utf8"));
    res.json(db);
});

router.post("/api/notes", (req, res) => {
    const db = JSON.parse(fs.readFileSync("db/db.json", "utf8"));
    const note = req.body;
    note.id = (db.length + 1).toString();

    db.push(note);
    fs.writeFileSync("db/db.json", JSON.stringify(db));
    res.json(db);
});

module.exports = router;

// use UUID? 