$(document).ready(function(){
	console.log("working");
	var correct = "12345"

	$("form").submit(function(e){
		var firstname = $("#firstname").val()
		var password = $("#password").val()
		console.log(firstname + " " + password )
		if(firstname === ""){
			e.preventDefault();
			$("h1").html("REQUIRED: Please put a USERNAME")
		}
		else if(correct === password ){
			e.preventDefault();
			window.location.href = "new.html"
		} else{
			e.preventDefault();
			$("h1").html("WRONG PASSWORD RE-ENTER")
		}
	})
}) // end document read