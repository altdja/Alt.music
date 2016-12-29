'use strict';

const express = require('express');
const path = require('path');
const fs = require('fs');
const app = express();
const cors = require('cors');
const config = require('./config/local');

app.use(cors());
app.use(express.static('app'));

app.get('/tracklist', function (req, res) {
  const PATH = './client/app/public/tracks/';
  fs.readdir(PATH, (err, files) => {
    if (err) {
      res.status(500).send({
        code: 500,
        message: "Backend error"
      })
    }
    return res.status(200).send(files)
  })
});

app.listen(config.server.port, function () {
  console.log(`Alt.music app listening on port ${config.server.port}!`);
});
