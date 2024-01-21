const router = require('express').Router();
const fs = require('fs');
const path = require('path');
const db = require("../db/db.json");

router.get("/api/notes", async (req, res) => {
    const db = await JSON.parse(fs.readFileSync("db/db.json", "utf8"));
    res.json(db);
});

router.post("/notes", (req, res) => {
    // console.log('POST /notes route hit');
    const note = req.body;
    note.id = (db.length + 1).toString();

    db.push(note);
    fs.writeFile(
        path.join(__dirname, "../db/db.json"),
        JSON.stringify(db, null, 2),
        (err) => {
            if (err) throw err;
            res.status(200).json(note);
        }
    );
});

module.exports = router;

// use UUID? 