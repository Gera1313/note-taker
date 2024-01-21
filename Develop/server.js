const express = require("express");
const path = require("path");
const htmlRoutes = require("./routes/index");
const notesRoutes = require("./routes/notes");

const PORT = process.env.PORT || 3001;
const app = express();

// Serve static files
app.use(express.static(path.join(__dirname, 'public')));

// Parse JSON and form data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Use routes
app.use("/", htmlRoutes);
app.use("/api", notesRoutes);

// Default route to serve index.html
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "/public/index.html"));
});

app.listen(PORT, () => console.log(`Listening for requests on http://localhost:${PORT}`));