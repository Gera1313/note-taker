const express = require("express");
const htmlRoutes = require("./routes/index");
const notesRoutes = require("./routes/notes");
const PORT = process.env.PORT || 3001;
const app = express();

app.use(express.static('public'));

app.use(express.json());
app.use(express.urlencoded({ extended: true })); 

app.use(htmlRoutes); 
app.use(notesRoutes);


app.listen(PORT, () => console.log(`Listening for requests on http://localhost:${PORT}`));