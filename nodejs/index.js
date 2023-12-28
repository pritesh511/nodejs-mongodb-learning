// Dummy data
const http = require("http");

const server = http.createServer((_req, res) => {
  res.end("This is server");
});

server.listen(8000);
