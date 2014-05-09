
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

	function splashScreenSlideOut(divToSlide, activeMenu ) {


		

			TweenMax.fromTo( currentDiv, .7 , { top: 0},{top: -310 } );
			TweenMax.fromTo( divToSlide , .7 , { top : 293 , autoAlpha : 0 } ,{ top : 0 , autoAlpha : 1 } );

	$('.menu-item').each(function(index, element){
		
		if(element!=activeMenu){
		element.animation.reverse()
		element.selected=false}
		else{
			activeMenu.selected=true
		}
	
	})
	
	
	currentDiv=divToSlide

	window._uiScreen="";


	};

	$( "#play-now" ).click( function( ) {

//	splashScreenSlideOut($( '#storescontainerstep3' ),this);
	splashScreenSlideOut($( '#compcodeinputcontainer' ),this);
		//splashScreenSlideOut($( '#codelosecontainer' ),this);
		
	/*	$( '#content' ).html( $( '#compcodeinputcontainer' ).html( ) );*/
		
	} );


	$( "#prizesAction" ).click( function( ) {

		splashScreenSlideOut($( '#prizescontainer' ),this);
		/*$( '#content' ).html( $( '#prizescontainer' ).html( ) );*/

	} );	
	
	$( "#winnersAction" ).click( function( ) {

		splashScreenSlideOut($( '#winnerscontainer' ),this);
		/*$( '#content' ).html( $( '#prizescontainer' ).html( ) );*/

	} );
	
	$( "#storesAction" ).click( function( ) {

		splashScreenSlideOut($( '#storescontainer' ),this);
		/*$( '#content' ).html( $( '#prizescontainer' ).html( ) );*/

	} );
	
	$( "#instructionsAction" ).click( function( ) {

		splashScreenSlideOut($( '#instructionscontainer' ),this);
		/*$( '#content' ).html( $( '#prizescontainer' ).html( ) );*/

	} );
	
	$( "#termsAction" ).click( function( ) {

		splashScreenSlideOut($( '#termscontainer' ),this);
		/*$( '#content' ).html( $( '#prizescontainer' ).html( ) );*/

	} );	
$('#top-arrow').click(
		function(){
			splashScreenSlideOut($( '#win' ),null)
		//TweenMax.to($('#win2000'),.7, {css:{marginTop:0}})
		//TweenMax.to($('.form-container'),.7, {marginTop:0,autoAlpha:0,delay:.2})
		}
	)
	$('#bottom-arrow').click(
		function(){
			splashScreenSlideOut($( '#win' ),null)
	//	TweenMax.to($('#win2000'),.7, {css:{marginTop:0}})
		//TweenMax.to($('.form-container'),.7, {marginTop:0,autoAlpha:0,delay:.2})
		}
	)


	window._uiScreen="";
	var currentScreen="";
	function screenTickTock(){
		if(currentScreen!=window._uiScreen){
			currentScreen=window._uiScreen;
			if(currentScreen!==""){
				splashScreenSlideOut($( '#'+currentScreen ),this);
			}
		}
		setTimeout(screenTickTock,100);
	}
	screenTickTock();

	//uiSetScreen('userformcontainer');
	//uiSetScreen('winnerscontainer');
	//uiSetScreen('storescontainer');

    
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

function uiSetScreen(screen){
	console.log("SCREEN "+screen);
	window._uiScreen=screen;
}

