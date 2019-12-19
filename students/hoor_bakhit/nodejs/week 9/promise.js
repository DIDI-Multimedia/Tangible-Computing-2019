var promise = new Promise( function( resolve,reject ) {
	var ss2isgood = true
	var probabilityItsGood = 0.35
	var diceRoll = Math.random()

	console.log(diceRoll)

	if (diceRoll > probabilityItsGood){

resolve('suicide squad is good')

	} else {
		reject('suicide squad is bad')
	}

	//resolve()

	
})

promise.then(function(successMessage){

console.log(successMessage) },

function(errorMessage) {

	console.log (errorMessage)

})