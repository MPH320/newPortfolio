Template.projects.rendered = function(){
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