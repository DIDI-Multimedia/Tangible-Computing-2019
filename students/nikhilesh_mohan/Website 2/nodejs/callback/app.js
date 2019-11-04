console.log('app.js')

let age = 18

function celebrateBirthday(age, callback)
{
	age++
	callback(age)
}

celebrateBirthday(age, function(age){

console.log('Happy '+age+' th bday')



})
//birthdayGreeting()