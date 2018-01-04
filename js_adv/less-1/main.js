/**
 * Шаблон вызова функции
 */
var func = function( a, b ) {
	// console.log( this ); // this принимает значение глобального объекта, это ошибка языка js
	return a + b;
}

// console.log(func( 1, 3 ));




/** 
 * Шаблон вызова метода. Методы дают нам доступ к объекту.
 */
var app = {
	funcAtApp: function( a, b ) {
		// console.log( this );
		return a + b;
	} // публичный метод
}

// console.log(app.funcAtApp(1, 4)); 




/**
 * Паттерн модуля. Для использования публичных и приватных методов в одном объекте.
 */
var appAsModule = (function() {
	var funcPrivate = function() {
		// console.log( this ); // принимает значение объекта, но приватного метода в нем не видно
		return 'private';
	};

	return {
		funcAtAppAsModule: function( a, b ) {
			// console.log( this ); // принимает значение объекта

			var _that = this;

			var helperFunc = function( c, d ) {

				// console.log( _that ); // т.к. this все равно принимает значение глобального объекта
				_that.multiply = c * d; // свойство multiply задаем объекту appAsModule
			}	

			helperFunc(a, b); // передаем параметры передаваемые в родительский метод funcAtAppAsModule

			return a + b;
		},

		funcPublic: funcPrivate
	}
})();

// console.log( appAsModule.funcAtAppAsModule( 1, 6 ) );
// console.log( appAsModule.funcPrivate() ) // ничего не получится, друг
// console.log( appAsModule.funcPublic() ); // выводим то, что возвращает приватный метод, используя публичный
// console.log(appAsModule.multiply);




/**
 * Apply. Позволяет работать в функции передавая в неё любой объект, как рабочую область (this)
 */
var arr = [3, 6];
var addFunc = function( a, b ) {
	console.log( this );
	var result = this.funcAtAppAsModule(arr.join(', '));
	
	return (this.multiply)
	 	? this.multiply + a + b 
	 	: result + a + b;
}

var summary = addFunc.apply(appAsModule, arr);
console.log( summary );