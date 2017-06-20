var height;
var amount = 6;


Template.portfolioNav.rendered = function(){
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