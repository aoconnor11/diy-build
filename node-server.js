/**
 * Created by Anita O Connor on 21/08/2015.
 */
'use strict';



var express = require('express');
//var bodyParser = require('body-parser');
var methodOverride = require('method-override');
var errorhandler = require('errorhandler');
var morgan = require('morgan'); // formerly express.logger
//var routes = require('../routes');
//var routes = require('route');
//var api = require('./routes/api');
var http = require('http');
var path = require('path');

var app = module.exports = express();




// all environments
app.set('port', process.env.PORT ||2000);
//app.set('views', path.join(__dirname, '/views'));
app.set('view engine', 'html');
app.engine('html', require('ejs').renderFile);


app.use(morgan('dev'));
//app.use(bodyParser());
app.use(methodOverride());


//app.use(bodyParser());
//app.use( app.router );
// express/connect middleware
//app.use(favicon(__dirname + '/app/favicon.ico'));
//app.use('/', routes);


// serve up static assets
app.use(express.static(path.join(__dirname, 'public')));

var env = process.env.NODE_ENV || 'development';
// development only
if ('development' === app.get('env')) {
    app.use(errorhandler());
}

// serve index and view partials
//app.get('/', routes.index);

// redirect all others to the index (HTML5 history)
//app.get('*', routes.index);
// serve index and view partials
//app.get('/', routes.index);

// JSON API
//app.get('/api/name', api.name);

// redirect all others to the index (HTML5 history)
//app.get('*', routes.index);



http.createServer(app).listen(app.get('port'), function () {
    console.log('Express server listening on port ' + app.get('port'));
});
//http.createServer(app).listen(app.get('port'), function () {
  //  console.log('myApp server listening on port ' + app.get('port'));
//});