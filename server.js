'use strict';

const express = require('express');
const path = require('path');
const app = express();

const fs = require('fs');
const config = require('./config/local');

app.use('/script', express.static(__dirname + '/node_modules/'));
app.use('/public', express.static(__dirname + '/public/'));
app.use(express.static('app'));

app.get('/', function (req, res) {
  res.sendfile('./app/index.html');
});

app.listen(config.server.port, function () {
  console.log(`AudioVK app listening on port ${config.server.port}!`);
});
