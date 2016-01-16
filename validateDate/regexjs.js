
function checkMatch(){
	var testDate = document.getElementById('date').value;
	if(!validateDate(testDate)){
		alert("NOT A MATCH ENTER IN THIS FORMAT (mm/dd/yyyy)");
	}
	else{
		alert("MATCH!");
	}
}

function validateDate(testDate) {
    var dateRegex = /^(\d{2})\/(\d{2})\/(\d{4})$/; 
    console.log(dateRegex);
    return dateRegex.test(testDate);
}

