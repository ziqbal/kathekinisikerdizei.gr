
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

//	splashScreenSlideOut($( '#codeusedcontainer' ),this);
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


function isUserFormValid(){

        var validationFlag=true;
        var str;

        str=$("input[name=u_name]").val();
        if(str==''|| str=='Συμπληρώστε το όνομά σας'){console.log("u_name");
		validationFlag=false; 
		$( '#right-label1').addClass("inputError")
		TweenMax.to( $('#right-label1'), .5 , { borderColor:'#F00'} );
		$('#right-label1').val('Συμπληρώστε το όνομά σας')
		}else{
		TweenMax.to( $('#right-label1'), .5 , { borderColor:'#CCCCCC'} );
		
		}
		
		
		
        str=$("input[name=u_surname]").val();
        if(str==''|| str=='Συμπληρώστε το επίθετό σας'){console.log("u_surname");validationFlag=false;
		TweenMax.to( $('#right-label2'), .5 , { borderColor:'#F00'} );
		$('#right-label2').val('Συμπληρώστε το επίθετό σας')
		}else{
		TweenMax.to( $('#right-label2'), .5 , { borderColor:'#CCCCCC'} );
		
		
		}
		
		
		
		
        str=$("input[name=u_mobile]").val();
        if(str==''|| str=='Συμπληρώστε το κινητό σας'){console.log("u_mobile");validationFlag=false;
		TweenMax.to( $('#right-label3'), .5 , { borderColor:'#F00'} );
		$('#right-label3').val('Συμπληρώστε το κινητό σας')
		}else{
		TweenMax.to( $('#right-label3'), .5 , { borderColor:'#CCCCCC'} );
				
		}
		
		
        str=$("input[name=u_address]").val();
        if(str==''|| str=='Συμπληρώστε τη διεύθυνσή σας'){console.log("u_address");validationFlag=false;
		TweenMax.to( $('#right-label5'), .5 , { borderColor:'#F00'} );
		$('#right-label5').val('Συμπληρώστε τη διεύθυνσή σας')
		}else{
		TweenMax.to( $('#right-label5'), .5 , { borderColor:'#CCCCCC'} );
		
		}
        str=$("input[name=u_area]").val();
        if(str==''|| str=='Συμπληρώστε την περιοχή σας') 
		{
		validationFlag=false; 
		TweenMax.to( $('#right-label6'), .5 , { borderColor:'#F00'} );
		$('#right-label6').val('Συμπληρώστε την περιοχή σας')
		}else{
		TweenMax.to( $('#right-label6'), .5 , { borderColor:'#CCCCCC'} );
		
		}
		
		
        str=$("input[name=u_po]").val();
        if(str==''|| str=='Συμπληρώστε τον Τ.Κ. σας') 
		{validationFlag=false; 
		TweenMax.to( $('#right-label7'), .5 , { borderColor:'#F00'} );
		$('#right-label7').val('Συμπληρώστε τον Τ.Κ. σας')
		}else{
		TweenMax.to( $('#right-label7'), .5 , { borderColor:'#CCCCCC'} );
		
		
		}
        str=$("input[name=u_email]").val();
		
        if(str=='' || str=='Συμπληρώστε τo email σας') 
		{
		validationFlag=false; 
		TweenMax.to( $('#right-label8'), .5 , { borderColor:'#F00'} );
		$('#right-label8').val('Συμπληρώστε τo email σας')
		}else{
		TweenMax.to( $('#right-label8'), .5 , { borderColor:'#CCCCCC'} );
		}

        if (!$('#checkbox1').is(":checked")){
        	console.log("checkbox1 fail");
	        validationFlag=false;
			TweenMax.to( $('#cbLabel1'), .5 , { css:{color:'#F00'}} );
			
		}else{
			TweenMax.to( $('#cbLabel1'), .5 , { css:{color:'#4D4D4D'}});
		}
		
		
		
		
        if (!$('#checkbox2').is(":checked")){
        	console.log("checkbox2 fail");
	        validationFlag=false;
			TweenMax.to( $('#cbLabel2'), .5 , { css:{color:'#F00'}} );
			
		}else{
			TweenMax.to( $('#cbLabel2'), .5 , { css:{color:'#4D4D4D'} });
		}

		
        return(validationFlag);

}

