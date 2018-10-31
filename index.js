"use strict"
var express=require("express");
var app=express();

var socket=require("socket.io");


var server=app.listen(3000,function(){
	console.log("server started");
});

app.use(express.static("public"));


var io=socket(server);

let users={};

io.on("connection", function(socket){

	socket.on("newUser",(data)=>{
		socket.broadcast.emit("newUser",data);
		console.log(data);
		users[socket.id]=data.handle;
	});

	socket.on("chat", function(data){
		io.sockets.emit("chat", data);
		//do something; send to all sockets
	});

	socket.on("keypress", function(data){
		socket.broadcast.emit("keypress", data);
	});
	socket.on("disconnect", ()=>{
		console.log(users);
		io.sockets.emit("user_left", {"handle":users[socket.id]});
		//console.log(data.userid+" left");
	});
	
});



