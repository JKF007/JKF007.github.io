$(function(){
	$("img").hide();
	
	$("p").click(function(){
		$(this).next().fadeToggle(400);
	})
});