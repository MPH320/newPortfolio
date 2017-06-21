var stuff = ['/bloccit', '/htmlshare', '/blocjams', '/pong', '/portfolioitems', '/angularjams'],
counter = 0;

var addSpans = function(paragraph) 
	{

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
	
	var $textToAnimate = $(".animate");

    
    $textToAnimate.each(function( index ) 
    {    
        $( this ).html( $( this ).html().replace(/./g, "<span class=\"letter\">$&</span>").replace(/\s/g, " "));
        addSpans($( this ));
    });
    
    //remove animation from empty spaces
    $textToAnimate.find($("span:contains(' ')")).before( " " );
    $textToAnimate.find($("span:contains(' ')")).remove();
}

Template.home.rendered = function(){
	prepareLetters();
	
}

Template.bloccit.rendered = function(){
	prepareLetters();
	counter = 0;
}

Template.htmlshare.rendered = function(){
	prepareLetters();
	counter = 1;
}

Template.blocjams.rendered = function(){
	prepareLetters();
	counter = 2;
}

Template.pong.rendered = function(){
	prepareLetters();
	counter = 3;
}

Template.angularjams.rendered = function(){
	prepareLetters();
	counter = 5;
}

Template.portfolioHeader.rendered = function(){

	  $('.next').click(function () {
        counter = (counter + 1) % stuff.length; 
				window.location = stuff[counter];
 
    });
	
	 $('.last').click(function () {
        counter = (counter - 1); 
		 
		 if(counter == -1){
			 counter = stuff.length - 1;
		 }

		 		window.location = stuff[counter];
 
    });
	
}