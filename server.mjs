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
      break;
    }
    case "/about": {
      path += "about.html";
      break;
    }
    case "/contact-me": {
      path += "contact-me.html";
      break;
    }
    default: {
      path += "404.html";
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
