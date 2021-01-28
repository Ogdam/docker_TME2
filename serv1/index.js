var express = require('express');
var app = express();
const request = require('request');
var sleep = require('sleep');
const axios = require('axios')

PONG_RECEIVE = 0
PING_SEND = 0

app.get('/pong', function(req, res) {
  PONG_RECEIVE += 1
  console.log('pong');
  res.send({})
  sleep.msleep(500);
  send_ping()
});

app.get('/nb_piong', function(req, res) {
  res.send("serv 1 : PING_SEND= "+PING_SEND+"  PONG_RECEIVE= "+PONG_RECEIVE)
});

app.listen(20001, function() {
  console.log('serv1');
  send_ping()
  send_port()
});

function send_port(){
  axios.post('http://serv3:20003/serv_port', {port:'20001', name:'serv1'})
        .then((res) =>    {console.error(`statusCode: ${res.statusCode}`)})
        .catch((error) => {console.error(error)})}

function send_ping(){
  PING_SEND =+1
  axios.get('http://serv2:20002/ping').then((res) => {console.error("pong send")}).catch((error) => {console.error(error)})

}
