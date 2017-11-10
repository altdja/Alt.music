'use strict';

const express = require('express');
const path = require('path');
const cors = require('cors');
const morgan = require('morgan');
const config = require('./config/local');

const app = express();

app.use(express.static(__dirname + '/build'));
app.use(express.static(__dirname + '/public'));

app.use(cors());
app.use(morgan('combined'));

const server = app.listen(config.server.port, function () {
  console.log(`Alt.music app listening on port ${config.server.port}!`);
});

require('./backend/socket-track_name')(server, config.server.url);
require('./backend/playlist_creator')(config);

app.get('/', function (req, res) {
    return res.sendFile(path.join(__dirname+'/public/index.html'));
});
