import { createServer } from "node:http";
import { readFile } from "node:fs";

const server = createServer((req, res) => {
  console.log(req.url, req.method);
  // set header content type
  res.setHeader("Content-Type", "text/html");

  let path = "./views/";

  switch (req.url) {
    case "/": {
      path += "index.html";
      res.statusCode = 200;
      break;
    }
    case "/about": {
      path += "about.html";
      res.statusCode = 200;
      break;
    }
    case "/contact-me": {
      path += "contact-me.html";
      res.statusCode = 200;
      break;
    }
    case "/contact": {
      res.statusCode = 301;
      res.setHeader("Location", "/contact-me");
      res.end();
      break;
    }
    default: {
      path += "404.html";
      res.statusCode = 404;
      break;
    }
  }

  // send an html file
  readFile(path, (err, data) => {
    if (err) {
      console.error(err);
      res.end();
      return;
    }
    res.end(data);
  });
});

server.listen(3000, "localhost", () => {
  console.log("Listening on localhost:3000");
});
