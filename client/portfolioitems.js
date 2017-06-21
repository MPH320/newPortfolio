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

function addItems() 
{
	var position = $(".navbar-inverse").offset(); // position = { left: 42, top: 567 }

	height = position.top/amount;

	$( ".portfolio-nav" ).empty();

	for (var i = 0; i<amount; i++){
			$(".portfolio-nav").width(height).height(height);
	}
}


 

   

