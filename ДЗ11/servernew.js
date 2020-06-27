const http = require("http");
const os = require("os");
const path = require("path");
const ut_sec = os.uptime();
const ut_min = ut_sec/60;

http.createServer(function(request, response) {
    response.writeHead(200, {'Content-Type': 'text/html'});
    response.write("<h2>System information</h2>\n");
    response.write("Current user name: " + os.userInfo().username + "<br></br>");
    response.write("OS type: " + os.type() + "<br></br>");
    response.write("System worktime: " + ut_min + " minutes" + "<br></br>");
    response.write("Current work directory: " + __dirname + "<br></br>");
    response.end("Server file name: " + path.basename(__filename));

}).listen(5000);
console.log('Server running at http://127.0.0.1:5000/');