const express = require("express")

app.listen(3001)

const app = express()

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.listen(PORT, () =>
  console.log(`Listening for requests on port ${PORT}!`)
);