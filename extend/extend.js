var __extends = this.__extends || function( d, b ) {
	for ( var p in b )
		if ( b.hasOwnProperty( p ) )
			d[p] = b[p];

	function __() {
		this.constructor = d;
	};

	__.prototype = b.prototype;

	d.prototype = new __();
};


var Human = (function() {
	function Human( config ) {
		this.name = config.name;
		this.years = config.years;
		this.speciality = config.speciality;
		this.dateOfBirth = config.dateOfBirth;
	};

	Human.prototype.getName = function() {
		return this.name;
	};

	return Human;
})();


var Man = (function( _config ) {
	__extends( Man, _config);

	function Man( config ) {
		_config.call( this, config );
	};

	return Man;
})( Human ); // equal Man extends Human


var config = {
	name: 'Ihor Gevorkyan',
	dateOfBirth: '16.08.1992',
	years: 22,
	speciality: 'Web developer'
};

var ihor = new Man( /*'Ihor Gevorkyan', */ config ); 

var btn = document.createElement( 'button' );
btn.textContent = "What is your name?";

btn.onclick = function() {
	console.log( ihor );
	console.log( ihor.getName() );
};

document.body.appendChild( btn );