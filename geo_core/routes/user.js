'use strict';

var express = require('express');
var cors = require('cors');


var User = require('../models/user');

var app = express();
var router = express.Router();

app.use(cors({
  origin: true,
  credentials: true
}));

// fetch data
app.get('/', function(req, res) {
  User.find({
  }, function(err, info) {
    if (err)
      res.send(err);
    res.json(info);
  });

});


// save user infomation
app.post('/saveinfo', function(req, res) {
  User.create({
    username: req.body.username,
    latitude: req.body.latitude,
    longitude: req.body.longitude,
    address: req.body.address,
    userAgent: req.body.userAgent,
    time: new Date()
  }, function(err, user) {
    if (err)
      res.send(err);
    res.json(user);
  });

});

module.exports = app;