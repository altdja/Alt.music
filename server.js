'use strict';

const express = require('express');
const path = require('path');
const app = express();
const config = require('./config/local');

app.use(express.static('app'));

app.get('/', function (req, res) {
  res.sendfile('./app/index.html');
});

app.listen(config.server.port, function () {
  console.log(`Alt.music app listening on port ${config.server.port}!`);
});
