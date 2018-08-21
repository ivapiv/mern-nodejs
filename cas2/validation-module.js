exports.checkPassword = function(pass){
	if(pass.length >= 6){
		return true;
	}

	else{
		return false;
	}
	
}



exports.checkEmail = function(email){

	if(email.includes('@') && email.endsWith('.com')){
		return true;
	}

	else{
		return false;
	}
}



