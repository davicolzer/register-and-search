const axios  = require("axios");
const http = require("http");
const fs = require('fs').promises;


const requestListener = function (request, response) {
    fs.readFile(__dirname + "/src/index.html")
        .then(contents => {
            response.setHeader("Content-Type", "text/html");
            response.writeHead(200);
            response.end(contents);
        })
};

const server = http.createServer(requestListener);
server.listen(8000, ()=>{
    console.log("Server Started on port 8000")
});
