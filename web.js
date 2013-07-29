var express = require('express');
var app = express();
app.use(express.logger());

var Buffer = require('buffer');


//var fileread = fs.readFileSync(index.html);
var buf = new Buffer(fs.readFileSync(index.html));

//var buffer = new Buffer(8);

app.get('/', function(request, response) {
  response.send(buf.tosString);
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
