
var express = require('express');

var app = express();
var server = app.listen(3000);

app.use(express.static('public'));


console.log('peanuts');

let age = 18

function celebrateBirthday(age,callback){

	age ++
	callback(age)
}

//function birthdayGreeting(age){

	//console.log('Happy '+ age + 'th Birthday')
//}

celebrateBirthday(age, function(age){

	console.log('Happy '+ age + 'th Birthday')
})
//birthdayGreeting()