'use strict';
var express  = require('express'),
bodyParser   = require('body-parser'),
http         = require('http'),
server       = express(),
mongoose     = require('mongoose'),
Countries     = require('./API/Models/Countries'); 
//created model loading here
// mongoose instance connection url connection

mongoose.Promise = global.Promise;
mongoose.connect("mongodb://paolopoli:politecnico1@ds139251.mlab.com:39251/bip-information-assistant",{useNewUrlParser: true});

server.use(bodyParser.urlencoded({ extended: true }));
server.use(bodyParser.json());
var routes = require('./API/Routes/Routes'); //importing route
routes(server); //register the route
server.listen((process.env.PORT || 8000), function () {
    console.log("Server is up and listening on port" + process.env.PORT);
});
