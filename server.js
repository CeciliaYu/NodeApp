var express = require("express");
var app     = express();
var path    = require("path");

app.use(express.static(path.join(__dirname,'public')));

app.get('/',function(req,res){
  res.sendFile(path.join(__dirname+'/index.html'));
  //__dirname : It will resolve to your project folder.
});

app.get('/flowplayer',function(req,res){
  res.sendFile(path.join(__dirname+'/public/flowplayer/flowplayer-rtmp.html'));
});

app.get('/about',function(req,res){
  res.sendFile(path.join(__dirname+'/index.html'));
  //__dirname : It will resolve to your project folder.
});

app.listen(8888);

console.log("Running at Port 8888");
