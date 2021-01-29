var express = require('express');
var app = express();
const request = require('request');
var sleep = require('sleep');
const axios = require('axios')

SERV_LIST = []

app.get('/ping', function(req, res) {
  res.send({})
  console.error("ping forward")
  sleep.msleep(500);
  axios.get('http://gateway:20005/ping').then((res) => {}).catch((error) => {console.error(error)})
});

app.get('/pong', function(req, res) {
  res.send({})
  console.error("pong forward")
  sleep.msleep(500);
  axios.get('http://serv1:20001/pong').then((res) => {}).catch((error) => {console.error(error)})
});

app.listen(20004, function() {
  console.log('serv4');
  send_port()
});

function send_port(){
  axios.post('http://serv3:20003/serv_port', {port:'20004', name:'serv4'})
        .then((res) =>    {console.log("port/ip referenced")})
        .catch((error) => {console.error(error)})
}
