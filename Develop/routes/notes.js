const router = require('express').Router()
const fs = require('fs');
const path = require('path');
const db = require("../db/db.json")

router.get("/notes", (req, res) => {
    res.json(db)
});

router.post("/notes", (req, res) => {
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

// NOTE: looked at INS and STU code from the Modules to get boilerplate code and examples. 