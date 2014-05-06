



var coreSplashScreenShowing = true;

$( function( ) {

	function coreSplashMoveAway( ) {

		if( coreSplashScreenShowing ) {

			TweenMax.to( $( '#win2000' ), .7 , { css : { marginTop : -645 } , delay : .25 } );
			TweenMax.to( $( '.form-container' ) , .7 , { marginTop : -345 , autoAlpha : 1 } );

			coreSplashScreenShowing = false;

		}

	}

	$( "#play-now" ).click( function( ) {

		coreSplashMoveAway( );
		$( '#content' ).html( $( '#compcodeinputcontainer' ).html( ) );

	} );


	$( "#prizesAction" ).click( function( ) {

		coreSplashMoveAway( );
		$( '#content' ).html( $( '#prizescontainer' ).html( ) );

	} );

} );