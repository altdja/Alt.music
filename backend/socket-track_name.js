const io = require('socket.io');
const icecast = require('icecast');

let trackName = '';

const emmitTrackName = (server, url) => {

   const io = require('socket.io').listen(server);

   io.on('connection', (socket) => {

      setInterval(() => {
         icecast.get(url, (res) => {
            res.on('metadata', (metadata) => {
               const parsed = icecast.parse(metadata);
               if (trackName !== icecast.parse(metadata).StreamTitle) trackName = parsed.StreamTitle;
               io.emit('track', trackName);
            });
         })
      }, 5000);

   });
};

module.exports = emmitTrackName;