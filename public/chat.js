
var socket=io.connect("http://localhost:8080");

var message=document.getElementById("message");
var	handle=document.getElementById("handle");
var	btn=document.getElementById("send");
var	output=document.getElementById("output");

var istyping=document.getElementById('istyping');


btn.addEventListener("click", function(){
	socket.emit("chat",{
		//data to send
		"message":message.value,
		"handle":handle.value
	})
});

socket.on("chat", function(data){
	istyping.value="";
	output.innerHTML=output.innerHTML+"<br>"+data.handle+":"+data.message;
	//do something; display data
});

socket.on("newUser", function(data){
	istyping.value="";
	output.innerHTML=output.innerHTML+"<br>usesr joinded your room";
});

message.addEventListener("keypress", function(){
	socket.emit("keypress", handle.value );
	console.log("eventlistener added");

});

socket.on("keypress", function feedback(data){
	console.log(data);
	istyping.innerHTML='<p><em>'+data+' is typing...</p></em>';
	setTimeout(function(){istyping.innerHTML=""}, 1000);
	//istyping.innerHTML="";
});