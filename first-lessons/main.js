// самовызывающая функция
;(function() {

	// простые типы данных
	var varNumber = 25,
		varString = 'Some text',
		varBool = true,
		varNull = null,
		varUndefined = undefined;
		// CamelCase - стиль написания названий переменных, где каждое следующее слово начинается с большой буквы
	
	console.log("Simple data types:");	
	console.log(typeof varNumber);
	console.log(typeof varString);
	console.log(typeof varBool);
	console.log(typeof varNull);
	console.log(typeof varUndefined);

	console.log(varString.toUpperCase()); // методы для работы со строками не изменяют строку, а создают новую.
	console.log(varString); 

	// объектный типы (объекты)
	var obj = {name: "something"},
		array = [1, 2, 3],
		regexp = /w+/g,
		func = function(){};

		console.log('');
		console.log("Object data types:");
		console.log(typeof obj);
		console.log(typeof array);
		console.log(typeof regexp);
		console.log(typeof func);

	obj.name = 'something other';
	array[1] = 123;

		console.log('After some changes:');
		console.log(obj);
		console.log(array);


	// оператор присваивания
	var a, b, c, d;
	a = b = c = d = 5; // присваивание происходит справа на лево
}());