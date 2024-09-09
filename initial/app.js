const http = require("http");

const routes = require("./routes");

const server = http.createServer(routes)
// console.log(routes.text)

server.listen(1313, console.log("1313 port listening"))

