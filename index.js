//requiring the file server.js which has our server config
var server = require("./server");
var router = require("./router");
// importing requestHandlers
var requestHandlers = require("./requestHandlers");

// requestHandlers object
var handle = {};
handle["/"] = requestHandlers.start;
handle["/start"] = requestHandlers.start;
handle["/upload"] = requestHandlers.subir;

server.start(router.route, handle);
