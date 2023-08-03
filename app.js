//Task
const http = require("http");
const fs = require("fs");

const data = fs.readFileSync("data.txt");

const user = {
  name: "Adeoluwa",
  age: 34,
  email: "adeoluayobami13@gmail.com",
};

const server = http
  .createServer((req, res) => {
    const url = req.url;
const middleware = function(req){
console.log(req)
}

    if (url === "/") {
      res.writeHead(200, { "content-type": "text/plain" });
      res.write("Hello, Node.js!");
      middleware();
      res.end();
    } else if (url === "/file") {
      fs.readFile("data.txt", function (err, data) {
        res.writeHead(200, { "Content-Type": "text/html" });
        res.write(data);
        middleware();
        return res.end();
      });
    } else if (url === "/api/user") {
      res.writeHead(200, { "content-type": "application/json" });
      res.end(JSON.stringify(user));
      middleware();
      res.end();
    }
  })
  server.listen(3000);

console.log("listening on port 3000");
