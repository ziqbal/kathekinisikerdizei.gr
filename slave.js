

var _slave = ( function( ) {

	var _my = function( ) { };


//////////////////////////////////////////////////////////////////////////////


	_my.setupCompcodeinputAction = function( ) {

			$(document).on("click","._compcodeinputAction", function(){

				var compcodeinput = $("._compcodeinput").first().val();
				console.log(compcodeinput);

			});

	};


//////////////////////////////////////////////////////////////////////////////

	_my._runFunctions = function( ) {

		var lastFunctionsPos = _functions.length - 1;

		for ( var i = 0 ; i <= lastFunctionsPos ; i++) {
			//console.log(_functions[i]);

			window[ _name ][ _functions[i] ]( ); 

		}

	};

	_my._run = function( fn ) {

		( _ready ) ? window[ _name ][ fn ]( ) : _functions.push( fn );

	};

	_my._init = function( ) {

		_my._run("setupCompcodeinputAction");

		_ready = true;
		_my._runFunctions( );

	};

	var _name = "_slave";
	var _ready = false;
	var _functions = [ ];

	$( function( ) {

		setTimeout( _my._init , 10 );

	} );

	return( _my );

} )( );



