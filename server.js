'use strict';

const express = require('express');
const path = require('path');
const fs = require('fs');
const cors = require('cors');
const morgan = require('morgan');
const icecast = require('icecast');
const config = require('./config/local');

const app = express();

app.use(express.static(__dirname + '/build'));
app.use(express.static(__dirname + '/public'));

app.use(cors());
app.use(morgan('combined'));

const server = app.listen(config.server.port, function () {
  console.log(`Alt.music app listening on port ${config.server.port}!`);
});

const io = require('socket.io').listen(server);

const url = 'http://91.240.87.220:8000/stream';

let trackName = '';
io.on('connection', function(socket){
  setInterval( function() {
    icecast.get(url, function (res) {
      res.on('metadata', function (metadata) {
        let parsed = icecast.parse(metadata);
        if (trackName !== parsed.StreamTitle) {
          trackName = parsed.StreamTitle;
        };
        io.emit('track', trackName);  
      });
    });
  }, 1000);
});

if (config.server.playlist) {
  const audioFolder = '/project/public/tracks';
  let playlist = ''; 
  fs.readdir(audioFolder, (err, files) => {
    if (err) { return console.log(err) }
    files.forEach(file => {
      playlist += `/project/public/tracks/${file}\r\n`;
    });

    fs.writeFile("/etc/ices2/playlist.txt", playlist, function(err) {
      if (err) { return console.log(err) }
      console.log("New playlist.txt created. Path: /etc/ices2/playlist.txt");
    });
  });
}

app.get('/', function (req, res) {
    return res.sendFile(path.join(__dirname+'/public/index.html'));
});
