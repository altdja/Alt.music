'use strict';

const express = require('express');
const path = require('path');
const app = express();

const fs = require('fs');
const config = require('./config/index');
app.use(express.static('app'));

app.get('/', function (req, res) {
  res.sendfile('./app/index.html')
});

app.get('/song', function (req, res) {
  const song = './public/Digital Summer - Breaking Point.mp3';
  fs.stat(song, function (err, stats) {
    if(err) {
      console.error(err);
      return res.writeHead(500);
    }

    const readStream = fs.createReadStream(song);
    res.writeHead(200, { 'Content-Type': 'audio/mpeg', 'Content-Length': stats.size });
    res.pump(readStream);
  })
});

app.listen(config.server.port, function () {
  console.log(`Alt.music app listening on port ${config.server.port}!`);
});
