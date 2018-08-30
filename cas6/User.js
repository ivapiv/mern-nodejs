exports.create = function (email, username, pass) {
	this.email = email;
	this.username = username;
	this.pass = pass;
}


exports.checkForUser = function (users, email, pass){

	users.forEach( u => {
		 console.log(u.email === email)
		 console.log(email)

		if(u.email == email){
			return true;
		}
	})

	return false;

}