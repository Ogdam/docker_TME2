var express = require('express');
var app = express();
const request = require('request');
var sleep = require('sleep');
const axios = require('axios')

SERV_LIST = []
NB_PING = 0

app.get('/ping', function(req, res) {
  NB_PING = NB_PING+1
  res.send({})
  sleep.msleep(500);
  console.error("ping send to serv2"+NB_PING)
  axios.get('http://serv2'+NB_PING+':20002/ping').then((res) => {}).catch((error) => {console.error(error)})
  if (NB_PING == 3)
    NB_PING = 0
});

app.get('/pong', function(req, res) {
  res.send({})
  sleep.msleep(500);
  console.error("pong send to serv4")
  axios.get('http://serv4:20004/pong').then((res) => {}).catch((error) => {console.error(error)})
});

app.listen(20005, function() {
  console.log('gateway');
  send_port()
});

function send_port(){
  axios.post('http://serv3:20003/serv_port', {port:'20005', name:'gateway'})
        .then((res) =>    {console.log("port/ip referenced")})
        .catch((error) => {console.error(error)})
}
