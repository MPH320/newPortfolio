	var addSpans = function(paragraph) 
	{
		console.log("Spans")
		paragraph.find(".letter").hover
			(
					function() 
					{
							var $thisLetter = $( this );

							$thisLetter.addClass('animated sparkle');

							setTimeout(function(){ 

							$thisLetter.removeClass('animated sparkle');

							}, 1000);

					}
			);
	}

var prepareLetters = function() 
{
	console.log("Hello");
	
	var $textToAnimate = $(".animate");
	
	console.log($textToAnimate)
    
    $textToAnimate.each(function( index ) 
    {    
        $( this ).html( $( this ).html().replace(/./g, "<span class=\"letter\">$&</span>").replace(/\s/g, " "));
        addSpans($( this ));
    });
    
    //remove animation from empty spaces
    $textToAnimate.find($("span:contains(' ')")).before( " " );
    $textToAnimate.find($("span:contains(' ')")).remove();
}

Template.bloccit.rendered = function(){
	prepareLetters();
	
}

Template.home.rendered = function(){
	prepareLetters();
	
}