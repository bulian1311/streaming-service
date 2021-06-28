const express = require("express");

const app = express();

app.get("/", (req, res) => {
  res.send({ msg: "Streaming service Api" });
});

const { PORT = 4000 } = process.env;

app.listen(PORT, () => console.log(`App listening on ${PORT}!`));
