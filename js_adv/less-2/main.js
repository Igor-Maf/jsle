/**
 * Routes - метод конструктор. Принято называть консрукторы с большой буквы
 */
var Routes = function( title, path ) {
	this.title = title;
	this.path = path;
	
	var _that = this; // приватная переменная для использования в методе getStatus

	var getStatus = function() {
		// console.log(_that);
		var status = ( _that.title && _that.path ) ? true : false;

		return status; 
	};
	
	this.status = getStatus();

	// return this;
};

// позволяет создавать методы к конструктору
Routes.prototype.getLink = function() {
	return '<a href="' + this.path + '">' + this.title + '</a>';
};

var home = new Routes( 'Home', 'http://www.oneteam.com.ua/' );
var simplePage = new Routes( 'Simple Page', 'http://www.oneteam.com.ua/simple-page' );
var notFound = new Routes( 'Not Found', '' );

console.log( "Construct method as function:" );
console.log( home );
console.log( simplePage );
console.log( home.getLink() );
console.log( simplePage.getLink() );

console.log( home instanceof Routes ); // использует ли объект home конструктор Routes?
console.log( Routes.prototype.isPrototypeOf(home) ); // или так


/**
 * Routes - метод конструктор в объекте
 */
var TestApp = {
	SomeMethod: function( switcher ) {
		this.name = ( switcher ) ? 'Maf' : 'Default';
		this.description = ( switcher ) ? 'Web developer' : 'The default description.';
	}
};

var Maf = new TestApp.SomeMethod(true);
var Default = new TestApp.SomeMethod();

console.log( '' );
console.log( "Construct method at Object:" );
console.log( Maf );
console.log( Default );

console.log( Maf instanceof TestApp.SomeMethod ); // использует ли объект Maf метод-конструктор SomeMethod объекта TestApp?
console.log( Maf.constructor ); // показать метод-конструктор объекта Maf