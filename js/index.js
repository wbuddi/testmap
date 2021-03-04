$(window).scroll(function(){
	$('nav').toggleClass('scrolled', $(this).scrollTop() > 50);
});

var initialSrc = "../images/color_logo_White_logo_Transparent.png";
var scrollSrc = "../images/color_logo_Black_logo_Transparent.png";

$(window).scroll(function() {
   var value = $(this).scrollTop();
   if (value > 100)
      $(".logo").attr("src", scrollSrc);
   else
      $(".logo").attr("src", initialSrc);
});