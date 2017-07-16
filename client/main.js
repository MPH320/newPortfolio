stuff = ['/bloccit', '/htmlshare', '/blocjams', '/pong', '/mygamehole', '/tweetsearch','/angularjams'],
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
	addItems(); 
	prepareLetters();
	counter = 0;
}

Template.htmlshare.rendered = function(){
	addItems();
	prepareLetters();
	counter = 1;
}

Template.blocjams.rendered = function(){
	addItems();
	prepareLetters();
	counter = 2;
}

Template.pong.rendered = function(){
	addItems();
	prepareLetters();
	counter = 3;
}

Template.mygamehole.rendered = function(){
	addItems();
	prepareLetters();
	counter = 4;
}

Template.tweetsearch.rendered = function(){
	addItems();
	prepareLetters();
	counter = 5;
}

Template.angularjams.rendered = function(){
	addItems();
	prepareLetters();
	counter = 6;
}

Template.contact.rendered = function(){
	prepareLetters();
}


Template.contactForm.rendered = function(){
	(function(){
		emailjs.init("user_7FiBACuJwaA8eAfdk0iVg");
	})();
	
	sendEmail = function() {

	var text = $("textarea[name='contact-message']").val();
	var email = $("input[name='contact-email']").val();
	var senderName = $("input[name='contact-name']").val();
	
	emailjs.send("gmail","template_dnkogWqP",{name: senderName, notes: text, email: email});
		$(".form-main").hide();
		$(".thanks").css("display","block");
	};
}