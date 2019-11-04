var promise = new Promise(function(resolve,reject){

var probabilityItsGood = 0.35
var diceRoll = Math.random()

console.log(diceRoll)
if (diceRoll > probabilityItsGood)
{
   resolve('Suicide squad 2 = 5 thumbs up')
}

else
{
	reject('its crappy')
}



})


promise.then(function(successMessage){

console.log(successMessage)

}, function(errorMessage){

	console.log(errorMessage)
})