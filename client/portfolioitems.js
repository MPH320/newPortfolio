var height = 51;
var amount = 6;

Template.portfolioNav.rendered = function(){
	

	addItems(); 
	
	$(window).resize(function() 
	{
		addItems(); 
	});
	
}

function addItems() 
{
	
	var size = window.innerHeight - height;
	size = size/amount;
	var lastOne = amount - 1;

	$( ".portfolio-nav" ).empty();

	for (var i = 0; i<amount; i++){
		if(i == lastOne){
			lastOne = lastOne * size;
			lastone = window.innerHeight - height - lastOne;
			$(".portfolio-nav").width(lastone).height(lastone);
		} else {
			$(".portfolio-nav").width(size).height(size);
		}
		
		
		
	}
}