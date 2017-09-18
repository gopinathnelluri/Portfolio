const hostname = '0.0.0.0';
const port = 80;

var express = require("express");
var https = require('https');
var http = require('http');
var fs = require('fs');
var path  = require("path");

var app = express();

//proxy part
var proxy = require('express-http-proxy');
app.use('/shell', proxy('127.0.0.1:8599'));
app.use('/chat', proxy('127.0.0.1:8080'));
//proxy part

var options = {
  key: fs.readFileSync('/etc/letsencrypt/live/gopinath.us/privkey.pem'),
  cert: fs.readFileSync('/etc/letsencrypt/live/gopinath.us/cert.pem')
};


app.get("/",function(req,res){
   res.sendFile(path.join(__dirname+'/files/index.html'));
  //res.send("Hello World<br/>My Portfolio in NodeJS & Ecpress  will be here soon..!");
})

http.createServer(app).listen(80);
https.createServer(options, app).listen(443);

/*
app.listen(port,function(){
  console.log('Server running at http://${hostname}:${port}/');
});
*/
///etc/letsencrypt/keys/0000_key-certbot.pem
