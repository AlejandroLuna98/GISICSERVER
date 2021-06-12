const noticias = require("./schemas/noticias");
const eventos = require("./schemas/eventos");
const express = require("express");
const mongoose = require("mongoose");
const app = express();
const port = 4000;
app.use(express.json());

app.get("/noticias", (req, res) => {
  noticias.find({}).then((result) => {
    res.send(result);
  });
});
app.get("/noticias/:id", (req, res) => {
  const id = req.params.id;
  noticias.findById(id).then((result) => {
    res.send(result);
  });
});
//-------

app.get("/eventos", (req, res) => {
  eventos.find({}).then((result) => {
    res.send(result);
  });
});
app.get("/eventos/:id", (req, res) => {
  const id = req.params.id;
  eventos.findById(id).then((result) => {
    res.send(result);
  });
});
mongoose.connect(
  "mongodb+srv://gabriela:ucatolica123@cluster0.auzeg.mongodb.net/inicio",
  {
    useNewUrlParser: true,
    useUnifiedTopology: false,
  },
  () => {
    app.listen(port, () => {
      console.log(`Example app listening at http://localhost:${port}`);
    });
  }
);
