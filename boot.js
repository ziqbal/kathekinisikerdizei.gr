
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


	var splashScreenShowing = true;

	function splashScreenSlideOut( ) {


		if( splashScreenShowing ) {

			TweenMax.to( $( '#win2000' ), .7 , { css : { marginTop : -645 } , delay : .25 } );
			TweenMax.to( $( '.form-container' ) , .7 , { marginTop : -345 , autoAlpha : 1 } );

			splashScreenShowing = false;

		}

	};

	$( "#play-now" ).click( function( ) {

		splashScreenSlideOut();
		$( '#content' ).html( $( '#compcodeinputcontainer' ).html( ) );

	} );


	$( "#prizesAction" ).click( function( ) {

		splashScreenSlideOut();
		$( '#content' ).html( $( '#prizescontainer' ).html( ) );

	} );		



});

