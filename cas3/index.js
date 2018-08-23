console.log("hi");

const fs = require('fs');
const http = require('http');

// fs.readFile('myFile.txt', 'utf-8', (err, data) => {

// 	if(err) throw err;

// 	else{
// 		console.log(data);
// 	}

// });


// fs.readFile('myFile.txt', 'utf-8', (err, data) => {

// 	if(err) throw err;

// 	else{
// 		var niza = data.split("\r\n");
// 		console.log(niza);

// 		niza.forEach(element => {
// 			if(element.includes('ana')){
// 				console.log(element);
// 			}
// 		})
// 	}



// });

var niza = ['ana', 'banana', 'kompjuter', 'telefon'];


// fs.writeFile('myFile1.txt', 'Hi Node.js', (error) =>{

// 	if(error) throw error;

// 	else{
// 		console.log("Uspesno zapisuvanje");
// 	}

// })

/*for(var i=0; i<niza.length; i++){
	if(!niza[i].includes('ana')){

		fs.appendFile('myFile2.txt', niza[i], (error) =>{
			if(error) throw error;

		else{
			console.log("Uspesno zapisuvanje");
		}
		})


	}
}*/


// fs.readFile("users.json", 'utf-8', (error, data) =>{

// 	console.log(data);

// 	var formatedData = JSON.parse(data);

// 	console.log(formatedData);

// 	formatedData.forEach(element => {
// 		console.log(element.username);
// 	})



// })


// fs.readFile('products.json', (error, data) =>{

// 	var dataJson = JSON.parse(data);
// 	var finalText = "";

// 	dataJson.forEach(proizvod => {
// 		var cena = proizvod.quantity * proizvod.price;

// 		var text = proizvod.name + ": " + cena + "den \r";

// 		finalText += text;


// 	})

// 	fs.writeFile('result.txt', finalText, (error) => {

// 		if(error) throw error;
// 		else console.log("ok");
// 	})

// })


http.createServer((request, response) =>{

	if(request.url == "/users"){
		response.writeHead(200, "OK");
		response.write("Welcome to users page");
		response.end();
	}
	else{
		response.writeHead(404, "Not found");
		response.write("Page not found");
		response.end();
	}


}).listen(3000);

