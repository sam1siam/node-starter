var http = require("http");
var url = require("url");

// http.createServer(function (request, response) {
//     response.writeHead(200, { "Content-Type": "text / html" });
//     response.write("Hello World");
//     response.end();
//   })
//   .listen(8888);

// putting the code in a function called start to export it to out index.js // we can on the other hand run the server here without this
function start(route, handle) {
  // Refactoring the above and passing a function into node's module createServer
  function onRequest(req, res) {
    var dataPosted = "";
    var pathname = url.parse(req.url).pathname;
    console.log("Request for" + pathname + " recieved");

    req.setEncoding("utf8");
    req.addListener("data", function (chunk) {
      dataPosted += chunkPosted;
      console.log("Recieved chunk POST '" + chunkPost + "'.");
    });

    req.addListener("end", function () {
      route(handle, pathname, res, dataPosted);
    });

    // route(handle, pathname, res);
    // res.writeHead(200, { "Content-Type": "text / html" }); //the request
    // var content = route(handle, pathname);
    // res.write(content); //the response
    // res.end();
  }

  http.createServer(onRequest).listen(8888);
  console.log("server started");
}

//exporting the server so it can be ran from index.js
exports.start = start;
