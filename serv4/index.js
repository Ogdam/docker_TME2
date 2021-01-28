var express = require('express');
var app = express();
const request = require('request');
var sleep = require('sleep');
const axios = require('axios')

SERV_LIST = []

app.get('/ping', function(req, res) {
  console.log('ping ask');
  res.send({})
  sleep.msleep(500);
  axios.get('http://serv2:20002/ping').then((res) => {console.error("ping send")}).catch((error) => {console.error(error)})
});

app.get('/pong', function(req, res) {
  console.log('pong ask');
  res.send({})
  sleep.msleep(500);
  axios.get('http://serv1:20001/pong').then((res) => {console.error("pong send")}).catch((error) => {console.error(error)})
});

app.listen(20004, function() {
  console.log('serv4');
  send_port()
});

function send_port(){
  axios.post('http://serv3:20003/serv_port', {port:'20004', name:'serv4'})
        .then((res) =>    {console.error(`statusCode: ${res.statusCode}`)})
        .catch((error) => {console.error(error)})
}
