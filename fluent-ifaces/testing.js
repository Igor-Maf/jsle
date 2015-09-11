Array.prototype.evenValues = function() {
	var evenValues = [];

	this.forEach(function ( val, i ) {
		if ( val % 2 == 0 )
			evenValues.push( val )
	})

	return evenValues; 
}

var result = [1, 2, 3, 4, 5, 6].evenValues();
console.debug( result );



var resFilter = [1, 2, 3, 4, 5, 6].filter(function (value, index) {
	return (value % 2 == 0);
})

console.log(resFilter)

// or this solution
Array.prototype.evenValuesFilter = function() {
	return this.filter(function (value, index) {
		return (value % 2 == 0);
	})
}

var result3 = [1, 2, 3, 4, 5, 6].evenValuesFilter();
console.log(result3)