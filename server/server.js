const express = require("express");
const fs = require("fs");
const app = express();
const port = 3000;
app.get("/", (req, res) => {
  console.log('hello')
  fs.readFile("movie-information.json", "utf8", (err, data) => {
    if (err) {
      console.error("Erreur lors de la lecture du fichier JSON", err);
      res.status(500).json({ error: "Erreur interne du serveur" });
      return;
    }

    try {
      const jsonData = JSON.parse(data);
      console.log(jsonData)
      res.json(jsonData);
    } catch (parseError) {
      console.error("Erreur lors de l'analyse JSON", parseError);
      res.status(500).json({ error: "Erreur interne du serveur" });
    }
  });
});
app.listen(port, () => {
  console.log(`Le serveur Express écoute sur le port ${port}`);
});
