const mongoose = require('mongoose');

const VideoGameSchema = new mongoose.Schema({
    title: { type: String, required: true },
    developer: { type: String, required: true },
    releaseDate: { type: Date, required: true },
    price: { type: Number, required: true }
});

const VideoGame = mongoose.model('VideoGame', VideoGameSchema);

module.exports = VideoGame;
