const express = require("express");
const path = require("path");
const htmlRoutes = require("./routes/index");
const notesRoutes = require("./routes/notes");

// const apiRoutes = require("./routes/")
// const htmlRoutes = require("./routes/index"); removed

const PORT = 3001;
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));

// Use the HTML routes
app.use("/", htmlRoutes);

// Use the notes API routes
app.use("/api", notesRoutes);

// app.use("/htmlRoutes", htmlRoutes)
// app.use("/", apiRoutes)
// app.use('/api', api)

// Removed the following: 
// app.get("/", (req, res) => {
//   res.sendFile(path.join(__dirname, "/public/index.html"));
// });

// app.get("/notes", (req, res) => {
//   res.sendFile(path.join(__dirname, "/public/notes.html"));
// });

// app.get("*", (req, res) => {
//   res.sendFile(path.join(__dirname, "/public/index.html"));
// });

app.listen(PORT, () => console.log(`Listening for requests on port ${PORT}!`));