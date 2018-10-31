
var socket=io.connect("http://localhost:3000");

var message=document.getElementById("message");
// var	handle=document.getElementById("handle");
var	btn=document.getElementById("send");
var	output=document.getElementById("output");

var istyping=document.getElementById('istyping');


let url= new  URL(window.location.href);
let handle=url.searchParams.get("handle");
let room=url.searchParams.get("room");

socket.emit("newUser", handle);


btn.addEventListener("click", function(){
	socket.emit("chat",{
		//data to send
		"message":message.value,
		"handle":handle
	})
});

socket.on("newUser",(data)=>{
	istyping.value="";
	console.log(data)
	output.innerHTML=output.innerHTML+"<br> "+data+" joined the room";
	console.log("newUser event");
});

socket.on("chat", function(data){
	istyping.value="";
	output.innerHTML=output.innerHTML+"<br>"+data.handle+" : "+data.message;
	//do something; display data
});

// socket.on("newUser", function(data){
// 	istyping.value="";
// 	output.innerHTML=output.innerHTML+"<br>user joinded the room";
// });

message.addEventListener("keypress", function(){
	socket.emit("keypress", handle );
	console.log("eventlistener added");

});

socket.on("keypress", function feedback(data){
	console.log(data);
	istyping.innerHTML='<p><em>'+data+' is typing...</p></em>';
	setTimeout(function(){istyping.innerHTML=""}, 1000);
	//istyping.innerHTML="";
});