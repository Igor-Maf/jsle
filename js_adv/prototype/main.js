var Foo = function() {
	this.name = "Foo name";
};

var objectAtPrototype = {
	name: 'ObjectAtPrototype name',
	sampleFunc: function(name) {
		this.name = name;
		objectAtPrototype.name = name;
		// console.log('test for sampleFunc at objectAtPrototype');
	}
};

var objectAtPrototype1 = {
	name: 'ObjectAtPrototype1 name',
	sampleFunc: function() {
		console.log('test for sampleFunc at objectAtPrototype1');
	}
};


// console.log(Foo);

var boo = new objectAtPrototype.sampleFunc('Test');
// console.log(boo);

/* В прототип присваиваем объект objectAtPrototype. 
Получается, что new Foo.__proto__ = objectAtPrototype */
Foo.prototype = objectAtPrototype; 
var boo2 = new Foo();
// console.log(boo2);

Foo.prototype = objectAtPrototype1; // прототип с объектом objectAtPrototype перезатирается объектом objectAtPrototype1
var boo3 = new Foo(); 
// console.log(boo3);

// console.log(Foo);






/**
 * Example with animals
 */
'use strict'
/* animal is object with common propeties and methods */
var animal = {
	canRun: true
};

console.log( 'Example with animals: ' ); // separator

/* -- Constructor for chiken -- */
var Chicken = function() {
	this.name = 'Chicken';
	this.canRun = false;
	this.isCanRunByParrent = function( isCanRunByParent ) {
		// if animal has property canRun as true, property for constructor Chicken been like animal.canRun
		this.canRun = ( isCanRunByParent ) ? isCanRunByParent : this.canRun; 

		return this.canRun;
	};
};

Chicken.prototype = animal;


var simpleChicken = new Chicken();

delete simpleChicken.canRun;

console.log( '' );
console.log( 'Chicken: ' );
console.log( simpleChicken );
console.log( 'Chicken can run and it`s "' + simpleChicken.isCanRunByParrent(Chicken.prototype.canRun) + '"' );


/* -- Constructor for all wolfs -- */
var Wolf = function() {
	this.name = 'Wolf';
};

/* --- Constructor for wolfs witch white --- */
var White = function() {
	this.color = 'White';
}

/* --- Constructor for wolfs witch black --- */
var Black = function() {
	this.color = 'Black';
}
 
/* extend animal object with properties for wolf */
Wolf.prototype = animal;

/* create simple wolf */
var simpleWolf = new Wolf();

White.prototype = simpleWolf;
Black.prototype = simpleWolf;

 
wolfWhite = new White();
wolfBlack = new Black();

console.log('');
console.log( 'Wolf: ' );
console.log( simpleWolf );


console.log( 'White wolf: ' );
console.log( wolfWhite );


var protoWhiteWolf = Object.getPrototypeOf(wolfWhite); // getPrototypeOf не работает в <=IE8
console.log( 'Имя белого волка, после конкатенации свойства объекта цвета со свойством родительского объекта Wolf: ' );
protoWhiteWolf.name = wolfWhite.color + ' ' + wolfWhite.name;
console.log( wolfWhite );

console.log('Black wolf: ');
console.log( wolfBlack );
// обладает ли экземпляр объекта wolfBlack на прямую свойстов color
console.log( wolfBlack.hasOwnProperty('color') ); 


// раскладываем объект по свойствам и свойствам протопитов
for ( var key in wolfBlack ) {
	if( !wolfBlack.hasOwnProperty(key) ) continue; // если не прямое свойство объекта, то выходим из цикла
	console.log( key + ': ' +  wolfBlack[key]);
}