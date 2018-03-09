"use strict"
var express=require("express");
var app=express()

var socket=require("socket.io");


var server=app.listen(8080,function(){
	console.log("server started");
});

app.use(express.static("public"));


var io=socket(server);

io.on("connection", function(socket){
	console.log("connection");
});



