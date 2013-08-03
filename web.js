var express = require('express');
var app = express();
app.use(express.logger());

var fs = require('fs');

var buf = new Buffer(fs.readFileSync('index.html'));

app.get('/', function(request, response) {
  response.send(buf.toString());
});

var port = process.env.PORT || 8080;
app.listen(port, function() {
  console.log("Listening on " + port);
});
