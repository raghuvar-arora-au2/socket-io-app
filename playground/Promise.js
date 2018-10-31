var p1=new Promise(function(resolve, reject){
	var num=Math.random();
	if (num<0.5)
		resolve(num);
	else
		reject(num);
});

p1.then(function(data){
	console.log("promise resolved with data", arr);
}).catch(function(data)){
	console.log("promise pl was rejected with data", data);
}





var promise=new Promise(function(relove, reject){
	setTimeout(function(){
		var randomInt=Math.floor(Math.random()*10);
		resolve(randomInt);
	}, 4000);
});

promise.then(function(data){
	console.log("random int passed to resolve",data);
});