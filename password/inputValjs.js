$(document).ready(function(){
	console.log("working");
	var correct = "12345"

	$("form").submit(function(e){
		var firstname = $("#firstname").val()
		var password = $("#password").val()
		console.log(firstname + " " + password )
		if(firstname === ""){
			e.preventDefault();
			$("h1").html("please fill out the form dumbass")
		}
		else if(correct === password ){
			e.preventDefault();
			//$("h1").html("Entered Correct Password Thanks")
			window.location.href = "new.html"
		} else{
			$("h1").html("WRONG PASSWORD RE-ENTER")
		}
	})
}) // end document read