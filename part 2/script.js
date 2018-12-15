function getDate(){
	var today = new Date();
	
	var dd = today.getDate();
	var mm = today.getMonth()+1; //January is 0!
	var yyyy = today.getFullYear();

	if(dd<10){
		dd = '0'+dd
	} 

	if(mm<10){
		mm = '0'+mm
	} 

	today = yyyy + '-' + mm + '-' + dd;
	console.log(today);
	document.getElementById('date').value = today;
}

function checkForm(){
	var name = document.getElementById('name').value;
	
	if (name.length == 0) {
		alert("Name is required")
	}	
	
	var userId = document.getElementById('user').value;
	
	if (email.length == 0) {
		alert("Email is required")
	}	
	
	var reason = document.getElementById('text').value;
	
	if (reason.length == 0) {
		alert("Reason is required")
	}	
}

function validateEmail(mail) 
{
 if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(myForm.emailAddr.value))
  {
    return (true)
  }
    alert("You have entered an invalid email address!")
    return (false)
}

