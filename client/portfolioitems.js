var height = 51;
var amount = 6;

Template.portfolioItems.rendered = function(){
	

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
	

	$( ".hello" ).empty();

	for (var i = 0; i<amount; i++){
		if(i == amount-1){
			console.log("hey");
			var lastOne = amount - 1;
			lastOne = lastOne * size;
			lastone = window.innerHeight - height - lastOne;
			$(".hello").append( "<span><a href='#'><img src='https://goo.gl/VkPX2x' height='" + lastone + "px' width='" + lastone + "px'></a></span><br>" );
		} else {
			$(".hello").append( "<span><a href='#'><img src='https://goo.gl/VkPX2x' height='" +size + "px' width='" +size + "px'></a></span><br>" );
		}
		
		
		
	}
}