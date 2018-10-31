//setTimeout(fn,0) wont rum immediately
//stack, queue, eventLoop

setTimeout(function(){
	console.log("here");
}, 0);

for(var i=0; i<100000;i++){
	var x=i*2;
}

console.log("done with the loop");