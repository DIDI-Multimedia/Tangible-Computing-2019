var promise = new Promise (function (resolve, reject){

	var probabilityItsGood = 0.35
	var diceRoll = Math.random()

	console.log(diceRoll)

	if (diceRoll > probabilityItsGood){
		resolve('Suicide Squad 2 = 5 thumbs up')
	} else {
		reject('Suicide Squad 2 is a crappy idea')
	}

	// var ss2isGood = true

})

promise.then(function(sucessMessage){
	console.log(sucessMessage)


}, function (errorMessage){

	console.log(errorMessage)

})