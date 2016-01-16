// function validator(event){
// 	debugger;
// 	//event.preventDefault;
// 	console.log("TEST");
// }

function keyDown(event){
	var key = event.keyCode;
	if(key > 47 && key < 65 ){
		document.getElementById("results").innerHTML = "Number";
	//console.log(key)
	}
	else{
		document.getElementById("results").innerHTML = "String";
	}
}