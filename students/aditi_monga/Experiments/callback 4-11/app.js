// let express = require('express')
// let app = express()
// let server = app.listen(3000)
// app.use(express.static('public'))
// console.log('express server running')

console.log('app.js')

let age = 19

function celebrateBirthday(age,callback){
	age ++
	callback()
}

function birthdayGreeting(){
	console.log ('Happy'+ age + 'st birthday')
}

celebrateBirthday (age, birthdayGreeting)