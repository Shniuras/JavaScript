console.log('App loaded');

$(document).ready(function(){
	$('.box').click(function(){
		$(this).fadeOut();
		$(this).fadeIn();
	});

	$('.box2').click(function(){
		$(this).siblings().fadeOut();
		$(this).siblings().fadeIn();
	});

	$('.box3').children().click(function(){
		$(this).fadeOut();
		$(this).fadeIn();
	});

	$('.box4').click(function(){
		$(this).parent().fadeOut();
		$(this).parent().fadeIn();
	});
});

