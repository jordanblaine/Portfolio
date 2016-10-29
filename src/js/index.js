$(document).ready(function(){
	$(".links a").hover(function(){
		$(this).css("color","white");
	}, function(){
		$(this).css("color","rgb(191, 191, 191)");
	});
	Foundation.Orbit.defaults.animInFromLeft = "fade-in";
	Foundation.Orbit.defaults.animInFromRight = "fade-in";
	Foundation.Orbit.defaults.animOutToLeft = "fade-out";
	Foundation.Orbit.defaults.animOutToRight = "fade-out";
	Foundation.Orbit.defaults.timerDelay = 3000;
	$(".orbit").foundation();

});