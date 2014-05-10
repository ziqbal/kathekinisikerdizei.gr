var positions=[-185,-160,-145,-160,-145,-185]
var mainTL=new TimelineMax({delay:.5})




function startAnim()
{
	//TweenMax.set($('#chess'), {clip:'rect(250px 970px 300px 0px)'});
	TweenMax.set($('.form-container'), {autoAlpha:0,marginTop:400});
	TweenMax.to($('body'), .3, {alpha:1})
	TweenMax.set($('.alert-box '),{autoAlpha : 0})
//	initMenus()
animateMenus()
	initRollovers()
	//animateMain()
}


/*function initMenus()
{
	for(var i=0;i<6;i++)
	{
	var img = $('#menu'+String(i+1));

	var pos=positions[i]
	
	
	TweenMax.set(img, {css:{backgroundPosition:"-250px 0px"}});
	}
		TweenMax.set($('.menu-items'), {alpha:1});
		
	
}
function animateMain(){
	mainTL.add(TweenMax.from($('#bottom-arrow'), 2, {css:{scale:0}, ease:Elastic.easeOut,delay:.3}))
	mainTL.insert(TweenMax.from($('#top-arrow'), 2, {css:{scale:0}, ease:Elastic.easeOut}));
	mainTL.insert(TweenMax.from($('#top-crown'), 1.5, {css:{top:-200,rotation:-150}, ease:Bounce.easeOut,delay:.6}))
	
	mainTL.insert(TweenMax.to($('#chess'), 2, {clip:'rect(0px 960px 300px 0px)', ease:Strong.easeIn}));
	mainTL.add(TweenMax.from($('#win2000'),1.5, {css:{scale:0}, ease:Elastic.easeOut}))
	mainTL.add(TweenMax.from($('#king'), .8, {alpha:0}))
	mainTL.insert(TweenMax.from($('#logos'), .8, {alpha:0,delay:1}))
	//mainTL.add(TweenMax.from($('.chess-main '), .2, {css:{height:0}}));
	//mainTL.add(TweenMax.from($('#chess'), .5, {css:{marginTop:300}, ease:Strong.easeOut}));

}

*/
function animateMenus()
{
	
	for (var counter=0;counter<positions.length;counter++){
	var img = $('#menu'+String(counter+1));	
	
	
	var pos=positions[counter]+30
	var tl=new TimelineMax()

	tl.add(TweenMax.set(img,  {css:{backgroundPosition:pos+"px" +" 0px"}, ease:Strong.easeOut}));
//	tl.add(TweenMax.to(text, .5, {alpha:1}));
	}

var crownTL=new TimelineMax({repeat:-1, repeatDelay:3})

crownTL.add(TweenMax.to($('#top-crown'), .3, {rotation:20,scaleX:1.3,scaleY:1.3}))
crownTL.add(TweenMax.to($('#top-crown'), .3, {rotation:0,scaleX:1,scaleY:1}))


}



function initRollovers()
{
	$('.menu-item').each(function(index, element){
		
		var ha = new TimelineLite({paused:true});
		ha.add(TweenMax.to($(this).find('.anim-arrow'), .3, {css:{backgroundPosition:"-100px 0px"},ease:Linear.easeInOut}))
		element.animation=ha
		element.selected=false
	
	})
	$('.menu-item').hover(
	function(){
		
		this.animation.play()
		},
		function ()
		{
			if(!this.selected){
			this.animation.reverse()
			}
		}
	)
	
	var arrowTopTween=	TweenMax.to($('#home'), .6, {scale:1.1, ease:Strong.easeOut,paused:true})
	$('#top-arrow').hover(
	function(){
		
	arrowTopTween.play()
		},
		function ()
		{
			arrowTopTween.reverse()
		}
	)
	
	
	var arrowBottomTween=	TweenMax.to($('#bottom-arrow'), .6, {top:"+7",scale:1.1,ease:Strong.easeOut,paused:true})
	$('#bottom-arrow').hover(
	function(){
		
	arrowTopTween.play()
		},
		function ()
		{
			arrowTopTween.reverse()
		}
	)

/*	
	$('#play-now').click(
		function(){
		TweenMax.to($('#win2000'),.7, {css:{marginTop:-645},delay:.25})
		TweenMax.to($('.form-container'),.7, {marginTop:-345,autoAlpha:1})
		}
	)
*/

	
	
	
	mainTL.insert(TweenMax.to($('#top-arrow'), .4, {css:{scale:1.3}, ease:Strong.easeIn}));
	mainTL.insert(TweenMax.to($('#top-arrow'), .4, {css:{scale:1}, ease:Strong.easeOut,delay:.4}));

	mainTL.insert(TweenMax.to($('#bottom-arrow'), .4, {css:{scale:1.3}, ease:Strong.easeIn,delay:.5}))
	mainTL.insert(TweenMax.to($('#bottom-arrow'), .4, {css:{scale:1}, ease:Strong.easeOut,delay:.9}))
	
	TweenMax.from($('#top-crown'), 1.5, {css:{top:-200,rotation:-150}, ease:Strong.easeOut,delay:1.5})
	
}