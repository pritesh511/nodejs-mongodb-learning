const http = require("http");
const fs = require("fs");
const PORT = 8080;

const server = http.createServer((req, res) => {
  if (req.url == "/") {
    fs.readFile("./html_files/index.html", (error, buffer_html) => {
      if (error) throw error;
      res.writeHead(200, {
        "Content-Type": "text/html",
      });
      res.write(buffer_html);
      res.end();
    });
  } else if (req.url == "/contact") {
    fs.readFile("./html_files/contact.html", (error, buffer_html) => {
      if (error) throw error;
      res.writeHead(200, {
        "Content-Type": "text/html",
      });
      res.write(buffer_html);
      res.end();
    });
  } else if (req.url == "/about") {
    fs.readFile("./html_files/about.html", (error, buffer_html) => {
      if (error) throw error;
      res.writeHead(200, {
        "Content-Type": "text/html",
      });
      res.write(buffer_html);
      res.end();
    });
  } else {
    fs.readFile("./html_files/404.html", (error, buffer_html) => {
      if (error) throw error;
      res.writeHead(200, {
        "Content-Type": "text/html",
      });
      res.write(buffer_html);
      res.end();
    });
  }
});

server.listen(PORT, () => {
  console.log(`The server is running on port ${PORT}`);
});
