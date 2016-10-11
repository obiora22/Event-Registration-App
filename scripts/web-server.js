var express = require('express');
var fs = require('fs');
var events = require('./EventController')
var app = express();
// NodeJs module
var path = require('path');
var rootPath = path.normalize(__dirname + '/../');
var bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

// Serve static files from provided directory
app.use(express.static(rootPath + 'app/'));

app.get('/data/events/:id', events.get)
app.post('data/events/', events.save)
app.get('/data/events/', events.getAll)
// app.post('/data/event/:id', events.save);
app.listen(8000);
console.log("Server is listening on port 8000 ...");
console.log(rootPath + "app/");
