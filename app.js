var express = require('express');
app = express();

var mongoose = require('mongoose');
var bodyParser =require('body-parser');
var path = require('path');
var async = require('async');
var swig = require('swig');

var routes = require('./routes/index');

var db = 'mongodb://localhost/todolistApp';
mongoose.connect(db);

// Setup View Engine
var swig = require('swig');
app.engine('html', swig.renderFile);

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'html');

app.use(express.static(path.join(__dirname, 'public')));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true
}));

app.use('/', routes);

app.listen(8080, function() {
  console.log('app listening on port  8080');
});