"use strict"
var express=require("express");
var app=express();

var socket=require("socket.io");


var server=app.listen(3000,function(){
	console.log("server started");
});

app.use(express.static("public"));


var io=socket(server);

io.on("connection", function(socket){

	socket.on("newUser",(data)=>{
		socket.broadcast.emit("newUser",data);
	});

	socket.on("chat", function(data){
		io.sockets.emit("chat", data);
		//do something; send to all sockets
	});

	socket.on("keypress", function(data){
		socket.broadcast.emit("keypress", data);
	});
	
});



