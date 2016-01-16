// function validator(event){
// 	debugger;
// 	//event.preventDefault;
// 	console.log("TEST");
// }


function keyDown(event){
	var key = event.keyCode;
	if(key > 47 && key < 65 ){
		document.getElementById("results").innerHTML = "NUMBER";
	}
	else if(key > 64 && key < 91 || key > 96 && key < 123){
		document.getElementById("results").innerHTML = "CHARACTER";
	}
}