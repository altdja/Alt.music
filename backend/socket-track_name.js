const io = require('socket.io');
const icecast = require('icecast');
const axios = require('axios');

let trackName = '';

const emmitTrackName = (server, url) => {

   const io = require('socket.io').listen(server);

   io.on('connection', (socket) => {
      setInterval(() => {

         axios.get(url, (data) => {
            icecast.get(url, (res) => {
               res.on('metadata', (metadata) => {
                  if (trackName !== icecast.parse(metadata).StreamTitle) trackName = parsed.StreamTitle;
                  io.emit('track', trackName);
               });
            });
         })
         .catch(err => console.log('Error: unable to get track title. Request url:', err.address));

      }, 5000);
   });
};

module.exports = emmitTrackName;