const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

mongoose.connect('mongodb://localhost/videogames', { useNewUrlParser: true });

const VideoGameSchema = new mongoose.Schema({
  title: String,
  developer: String,
  releaseDate: Date,
  price: Number
});

const VideoGame = mongoose.model('VideoGame', VideoGameSchema);

const app = express();
app.use(bodyParser.json());

app.post('/videogames', (req, res) => {
  const videoGame = new VideoGame(req.body);
  videoGame.save((err) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.status(201).send(videoGame);
    }
  });
});

app.delete('/videogames/:id', (req, res) => {
  VideoGame.deleteOne({ _id: req.params.id }, (err) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.status(204).send();
    }
  });
});

app.put('/videogames/:id', (req, res) => {
  VideoGame.findByIdAndUpdate(req.params.id, req.body, { new: true }, (err, videoGame) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.status(200).send(videoGame);
    }
  });
});

app.listen(3000, () => {
  console.log('API listening on port 3000');
});
