const hostname = '0.0.0.0';
const port = 80;

var express = require("express");

var app = express();

app.get("/",function(req,res){
  res.send("Hello World<br/>My Portfolio in NodeJS & Ecpress  will be here soon..!");
})

app.listen(port,function(){
  console.log('Server running at http://${hostname}:${port}/');
});
/*
const http = require('http');

const hostname = '0.0.0.0';
const port = 80;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello World\nMy Portfolio in NodeJS will be here soon.!');
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});

*/
