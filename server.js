'use strict';

const express = require('express');
const path = require('path');
const fs = require('fs');
const cors = require('cors');
const morgan = require('morgan');
// const config = require('./config/local');

const app = express();
app.use(express.static(__dirname + '/build'));

app.use(cors());
app.use(morgan('combined'));

app.listen(8081, function () {
  console.log(`Alt.music app listening on port 8081!`);
});

app.get('/', function (req, res) {
    return res.sendFile(path.join(__dirname+'/client/app/public/index.html'));
});
