const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const videogameRoutes = require('./routes/videogame');
const VideoGame = require('./models/VideoGame');

const app = express();
app.use(bodyParser.json());

mongoose.connect('mongodb://localhost:27017/videogames-shop', { useNewUrlParser: true });

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  console.log("Connected to MongoDB");
});

app.use('/api/videogames', videogameRoutes);

app.listen(3000, () => {
    console.log("Server is running on port 3000");
});
