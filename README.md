Alt's music

1. Install: install npm packege via `npm i`;
2. Create config file PATH `./config/local.js`

    ```javascript
    module.exports.server = {
        port: 8081,
        playlist: false
    }
    ```
    
3. Run: 
  - Build bandle.js use `npm run build`;
  - Run webpack `npm run dev`;
  - Run backend server `node server.js`;
  - Go to `localhost:8080`
  - Enjoy
