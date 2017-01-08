'use strict';

const express = require('express');
const path = require('path');
const fs = require('fs');
const cors = require('cors');
const morgan = require('morgan');
const config = require('./config/local');

const app = express();

app.use(cors());
app.use(morgan('combined'));

app.listen(config.server.port, function () {
  console.log(`Alt.music app listening on port ${config.server.port}!`);
});

app.get('/audio/track.mp3', function(req, res) {
  // const rstream = fs.createReadStream('./public/1.mp3');
  // rstream.pipe(res);

  const stream = fs.createReadStream('./public/1.mp3', {'bufferSize': 512*12})
  stream.pipe(res);
});

app.get('/tracklist', function (req, res) {
  const PATH = './client/app/public/tracks/';
  fs.readdir(PATH, (err, files) => {
    if (err) {
      res.status(500).send({
        code: 500,
        message: "Backend error"
      });
    }
    return res.status(200).send(files)
  });
});
