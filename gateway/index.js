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
  axios.get('http://serv2'+NB_PING+':2001'+NB_PING+'/ping').then((res) => {console.error("ping send")}).catch((error) => {console.error(error)})
  if (NB_PING == 3)
    NB_PING = 0
});

app.get('/pong', function(req, res) {
  res.send({})
  sleep.msleep(500);
  axios.get('http://serv4:20004/pong').then((res) => {console.error("pong send")}).catch((error) => {console.error(error)})
});

app.listen(20005, function() {
  console.log('serv4');
  send_port()
});

function send_port(){
  axios.post('http://serv3:20003/serv_port', {port:'20004', name:'serv4'})
        .then((res) =>    {console.error(`statusCode: ${res.statusCode}`)})
        .catch((error) => {console.error(error)})
}
