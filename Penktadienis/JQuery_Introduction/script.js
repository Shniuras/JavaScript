console.log('App loaded');

$(document).ready(function(){
	$('#btn4').hide();

	$("#btn1").click(function(){
    	$("#div1").fadeToggle();
	});
	$("#btn2").click(function(){
    	$("#div2").hide();
	});
	$('#btn3').click(function(){
		$('#div4').slideDown();
		$('#btn4').show();
	});
	$('#btn4').click(function(){
		$('#btn4').hide();
		$('#div4').slideUp();
	})

});