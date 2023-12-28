const http = require("http");

const server = http.createServer((req, res) => {
  if (req.url == "/") {
    res.end("This is home page loaded");
  } else if (req.url == "/contact") {
    res.end("<h1>Hello Home page</h1>");
  } else if (req.url == "/about") {
    res.end("This is about page page loaded");
  } else {
    res.end("404 Error Page not found");
  }
});

server.listen(8000, () => {
  console.log("Your server is running on port 8000");
});
