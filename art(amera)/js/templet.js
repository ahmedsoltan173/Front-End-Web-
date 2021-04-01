/*global $,alert,console*/
$(function(){
	'use strict';
	//triger nice scroll pluger

	$('html').niceScroll({
		cursorcolor:'#f7600e',
		cursorwidth:10,
		cursorborder:'1px solid #f7600e'
	});

	// Change Header Height 

	$('.header').height($(window).height());

	//Scroll To next section
	
});	

  $(document).ready(function () {

 	"use strict";

 $(".header .arrow i").click(function(e){
 		e.preventDefault();
 		$("html,body").animate({
 			scrollTop: $('.word').offset().top

 		},1000);
		
});
});
  $(document).ready(function () {

 	"use strict";

  $(".galler").click(function(e){
 		e.preventDefault();
 		$("html,body").animate({
 			scrollTop: $('.gallery').offset().top

 		},1000);
		
});
});
  $(document).ready(function () {

 	"use strict";

$(".order").click(function(e){
 		e.preventDefault();
 		$("html,body").animate({
 			scrollTop: $('.orderss').offset().top

 		},1000);
		
});
});
  //End To Scroll To Next Section