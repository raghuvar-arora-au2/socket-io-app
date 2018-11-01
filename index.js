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
let connected_clients=2;

io.on("connection", function(socket){

	socket.on("newUser",(data)=>{
		connected_clients=connected_clients+1;
		data["connected_clients"]=connected_clients;
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
		connected_clients=connected_clients-1;
		io.sockets.emit("user_left", {"handle":users[socket.id],"connected_clients":connected_clients});
		
		//console.log(data.userid+" left");
	});
	
});



