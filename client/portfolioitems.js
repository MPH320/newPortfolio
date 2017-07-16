var height;
var amount = 7;

function flicker() 
{
		var $img = $(".bw-img");

	$img.mouseover(function(e) {
    var src = $(this).attr("src");
		src = src.replace("bw/", "");
		$(this).attr("src", src);
    e.stopPropagation();
	}).mouseout(function(e) {
    var src = $(this).attr("src");
		src = "bw/" + src;
		$(this).attr("src", src);
	});
}


Template.portfolioNav.rendered = function(){

	flicker();

	addItems(); 
	
	$(window).resize(function() 
	{
		addItems(); 
	});
	
	$(window).scroll(function() 
	{
		addItems(); 
	});
	
}

addItems = function () 
{
	var position = $(".navbar-inverse").offset(); // position = { left: 42, top: 567 }

	position = position.top + 2.3333333;

	height = position/amount;

	$( ".portfolio-nav" ).empty();

	for (var i = 0; i<amount; i++){
			$(".portfolio-nav").width(height).height(height);	
	}
}


 

   

