var express = require("express");
var app     = express();
var path    = require("path");

app.get('/',function(req,res){
  res.sendFile(path.join(__dirname+'/index.html'));
  //__dirname : It will resolve to your project folder.
});

app.get('/flowplayer',function(req,res){
  res.sendFile(path.join(__dirname+'/flowplayer/flowplayer-rtmp.html'));
});

app.listen(8888);

console.log("Running at Port 8888");
