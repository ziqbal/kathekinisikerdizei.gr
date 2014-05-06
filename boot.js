
(function() {
    var method;
    var noop = function () {};
    var methods = [
        'assert', 'clear', 'count', 'debug', 'dir', 'dirxml', 'error',
        'exception', 'group', 'groupCollapsed', 'groupEnd', 'info', 'log',
        'markTimeline', 'profile', 'profileEnd', 'table', 'time', 'timeEnd',
        'timeStamp', 'trace', 'warn'
    ];
    var length = methods.length;
    var console = (window.console = window.console || {});

    while (length--) {
        method = methods[length];

        // Only stub undefined methods.
        if (!console[method]) {
            console[method] = noop;
        }
    }
}());


$(function(){

var currentDiv=$( '#win' )
	TweenMax.fromTo( currentDiv, .7 , { top : 345 , autoAlpha : 0 } ,{ top : 0 , autoAlpha : 1 }  );

	function splashScreenSlideOut(divToSlide ) {


		

			TweenMax.fromTo( currentDiv, .7 , { top: 0},{top: -345 } );
			TweenMax.fromTo( divToSlide , .7 , { top : 345 , autoAlpha : 0 } ,{ top : 0 , autoAlpha : 1 } );

			currentDiv=divToSlide

	};

	$( "#play-now" ).click( function( ) {

		splashScreenSlideOut($( '#compcodeinputcontainer' ));
		
	/*	$( '#content' ).html( $( '#compcodeinputcontainer' ).html( ) );*/
		
	} );


	$( "#prizesAction" ).click( function( ) {

		splashScreenSlideOut($( '#prizescontainer' ));
		/*$( '#content' ).html( $( '#prizescontainer' ).html( ) );*/

	} );	
	
	$( "#winnersAction" ).click( function( ) {

		splashScreenSlideOut($( '#winnerscontainer' ));
		/*$( '#content' ).html( $( '#prizescontainer' ).html( ) );*/

	} );
	
	$( "#storesAction" ).click( function( ) {

		splashScreenSlideOut($( '#storescontainer' ));
		/*$( '#content' ).html( $( '#prizescontainer' ).html( ) );*/

	} );
	
	$( "#directionsAction" ).click( function( ) {

		splashScreenSlideOut($( '#directionscontainer' ));
		/*$( '#content' ).html( $( '#prizescontainer' ).html( ) );*/

	} );
	
	$( "#termsAction" ).click( function( ) {

		splashScreenSlideOut($( '#termscontainer' ));
		/*$( '#content' ).html( $( '#prizescontainer' ).html( ) );*/

	} );	


    
});


function _codeError(){
        $( '#content' ).html( $( '#errorcontainer' ).html( ) );
}
function _codeAccepted(){
    alert("CODE Accepted!!!");
}

function showPrize(){
    $( '#content' ).html( $( '#prizediv' ).html( ) );
}
function showUserForm(){
    $( '#content' ).html( $( '#userformcontainer' ).html( ) );
}


