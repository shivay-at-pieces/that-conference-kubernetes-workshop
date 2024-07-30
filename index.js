// npm init -y
// npm install express

var express = require('express');

var app = express();

// defines a route 
app.get('/', function (req, res) {
  res.send('Hello from the Kubernetes workshop!');
});

// listening on port 8000 
app.listen(8000, function () {
  console.log('Listening on port 8000!');
});
