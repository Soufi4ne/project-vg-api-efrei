const express = require('express');
const router = express.Router();
const VideoGame = require('../models/VideoGame');

router.get('/', (req, res) => {
    VideoGame.find({}, (err, videogames) => {
        if (err) {
            res.status(500).send(err);
        } else {res.status(200).json(videogames);
        }
    });
});

router.post('/', (req, res) => {
    const videoGame = new VideoGame(req.body);
    videoGame.save((err) => {
        if (err) {
            res.status(500).send(err);
        } else {
            res.status(201).json(videoGame);
        }
    });
});

router.delete('/:id', (req, res) => {
    VideoGame.deleteOne({ _id: req.params.id }, (err) => {
        if (err) {
            res.status(500).send(err);
        } else {
            res.status(204).send();
            //ou 201??
        }
    });
});

router.put('/:id', (req, res) => {
    VideoGame.findByIdAndUpdate(req.params.id, req.body, { new: true }, (err, videoGame) => {
        if (err) {
            res.status(500).send(err);
        } else {
            res.status(200).json(videoGame);
        }
    });
});

module.exports = router;

