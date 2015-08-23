/**
 * Created by Anita O Connor on 21/08/2015.
 */
'use strict';

var express = require('express');
var methodOverride = require('method-override');
var errorhandler = require('errorhandler');
var morgan = require('morgan'); // formerly express.logger
var http = require('http');
var path = require('path');
var app = module.exports = express();


// all environments
app.set('port', process.env.PORT ||3000);
app.set('view engine', 'html');
app.engine('html', require('ejs').renderFile);


app.use(morgan('dev'));
app.use(methodOverride());


// serve up static assets
app.use(express.static(path.join(__dirname, 'public')));

var env = process.env.NODE_ENV || 'development';
// development only
if ('development' === app.get('env')) {
    app.use(errorhandler());
}

http.createServer(app).listen(app.get('port'), function () {
    console.log('Express server listening on port ' + app.get('port'));
});
