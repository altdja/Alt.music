const fs = require('fs');

let playlist = '';

const createPlaylist = (config) => {

   if (config.server.playlist) {
      fs.readdir(config.server.tracks_folder, (err, files) => {
         if (err) return console.log(err);

         files.forEach(file => {
            playlist += `/project/public/tracks/${file}\r\n`;
         });

         fs.writeFile("/etc/ices2/playlist.txt", playlist, function (err) {
            if (err) { return console.log(err) }
            console.log("New playlist.txt created. Path: /etc/ices2/playlist.txt");
         });
      });
   }

}

module.exports = createPlaylist;
