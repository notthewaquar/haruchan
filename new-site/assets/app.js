// navbar
(function($) { 
  $(function() {
		$('#nav-toggle').click(function() {
			$('nav ul').slideToggle();
		});
    $('#nav-toggle').on('click', function() {
      this.classList.toggle('active');
    });
  }); 
})(jQuery); 
// pop up button
$(".pop-btn").each(function(){
  $(this).click(function(){
    $(this).toggleClass('myshow');

    if ($(this).find("svg").hasClass("home-page")) {
        $(this).find("svg").toggleClass('fa-user').toggleClass('fa-times');
    } else if ($(this).find("svg").hasClass("inner-page")) {
        $(this).find("svg").toggleClass('fa-headset').toggleClass('fa-times');
    }
  });
});
// faq section
$(document).ready(function(){
	// each faq title trigger
	$(".faq-title").each(function(){
	  $(this).click(function(){
	    // $(this).next().toggleClass('show');
	    $(this).toggleClass('faq-shown');
	    $(this).find("svg").toggleClass('fa-caret-right').toggleClass('fa-caret-down');
	  });
	});
	// // expand all collapse all
 //  $(".trigger-a").click(function(){
 //  	$(this).text(function(i, text){
 //      return text === "Expand all" ? "Collapse all" : "Expand all";
 //    });
 //    if ($(this).text() !== 'Expand all') {
	//     $(".collapse").addClass('show');
	//     $(".faq-title").addClass('faq-shown');
	//     $(".faq-title").find("svg").addClass('fa-caret-down').removeClass('fa-caret-right');
 //    } else {
	//     $(".collapse").removeClass('show');
	//     $(".faq-title").removeClass('faq-shown');
	//     $(".faq-title").find("svg").removeClass('fa-caret-down').addClass('fa-caret-right');
 //    };
	// });
});
// scroll nav bg change
$(document).ready(function(){
	$(function() {
	    var header = $(".top-navbar");
	  
	    $(window).scroll(function() {    
	        var scroll = $(window).scrollTop();
	        if (scroll >= 10) {
	            header.addClass("nav-bg-blue");
	        } else {
	            header.removeClass("nav-bg-blue");
	        }
	    });
	  
	});
});