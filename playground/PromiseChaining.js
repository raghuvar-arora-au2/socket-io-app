

var p1=new Promise(function(resolve, reject){
	setTimeout(function(){
		randomNum=Math.random();
		resolve(randomNum);
	},3000);
})

p1.then(function(randomNum){
	console.log("first promise resolved", randomNum);
	return new Promise(function(resolve, reject){
		setTimeout(function(){
			resolve(Math.random());
		},500);
	})
}).then(function(data){
	console.log(" Second sencond promise resolved", data);
})

//=============================

var promise=new Promise(function(resolve, reject){
	resolve(5);

})

promise.then(function(data){
	return data*2;
}).then(function(data){
	return data+20;
}).then(function(data){
	console.log(data);
});



for (var i = 0; i < arr.length; i++) {
  function timer(){
  	var k=i;
  	setTimeout( function() {
    console.log('Index: ' + k + ', element: ' + arr[k]);
  }, 3000);};timer()
}
