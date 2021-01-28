var express = require('express');
var app = express();
const request = require('request');
var sleep = require('sleep');
const fs = require('fs');
const bodyParser = require("body-parser");

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

SERV_LIST = []

app.post('/serv_port', function(req, res) {
  SERV_LIST.push(req.body)
  res.send('')
});

app.get('/serv_port_list', function(req, res) {
  res.send(SERV_LIST)
});


app.listen(20003, function() {
  console.log('serv3');
});
