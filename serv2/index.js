var express = require('express');
var app = express();
const request = require('request');
var sleep = require('sleep');
const axios = require('axios')

PING_RECEIVE = 0
PONG_SEND = 0

app.get('/ping', function(req, res) {
  PING_RECEIVE += 1
  console.log('ping');
  res.send("")
  sleep.msleep(500);
  send_pong()
});

app.get('/nb_piong', function(req, res) {
  res.send("serv 2 : PONG_SEND= "+PONG_SEND+"  PING_RECEIVE= "+PING_RECEIVE)
});

app.listen(20002, function() {
  console.log('serv2');
  send_port()
});

function send_port(){
  axios.post('http://tme2_serv3_1:20003/serv_port', {port:'20002', name:'serv2'})
        .then((res) => { console.log(`statusCode: ${res.statusCode}`)})
        .catch((error) => {console.error(error)})}

function send_pong(){
  PONG_SEND += 1
  axios.get('http://tme2_serv1_1:20001/pong').then((res) => console.log("pong send")).catch((error) => {console.error(error)})
}
