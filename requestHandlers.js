var exec = require("child_process").exec;

//defining requestHandlers
function start(res, postData) {
  console.log("Request handler 'start' was called.");

  //form
  var body =
    "<html>" +
    "<head" +
    '<meta http-equiv = "Content-Type" content = "text / html; charset = UTF-8 "/>' +
    "</head" +
    "<body>" +
    '<form action = "/upload" method="post">' +
    '<textarea name = "text" rows="20" cols="60"></textarea>' +
    '<input type = "submit" value = "send text" />' +
    "</form>" +
    "</body>" +
    "</html>";

  res.writeHead(200, { "Content-Type": "text / html" });
  res.write(body);
  res.end();
}

function upload(res, dataPosted) {
  console.log("Request handler 'upload' has been called");
  res.writeHead(200, { "Content-Type": "text / html" });
  res.write("You sent the text::" + querystring.parse(dataPosted)["text"]);
  res.end();
}

exports.start = start;
exports.subir = upload;
