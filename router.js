function route(handle, pathname, res, postData) {
  console.log("About to route a request for" + pathname);
  if (typeof handle[pathname] === "function") {
    handle[pathname](res, postData);
  } else {
    console.log("No manipulator found for" + pathname);
    res.writeHead(404, { "Content-Type": "text / html" });
    res.write("404 Not Found");
    res.end;
  }
}

exports.route = route;
