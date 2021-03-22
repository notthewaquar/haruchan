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
// 
document.addEventListener("DOMContentLoaded", function() {
    var elements = document.getElementById("yourmail");
    // for (var i = 0; i < elements.length; i++) {
        elements.oninvalid = function(e) {
            e.target.setCustomValidity("");
            if (!e.target.validity.valid) {
                e.target.setCustomValidity("This field cannot be left blank");
            }
        };
        elements.oninput = function(e) {
            e.target.setCustomValidity("");
        };
    // }
})
// dfsdfsdfdsfdsfsdfsdfdsfs
// dfsdfsdfdsfdsfsdfsdfdsfs
$(document).ready(function(){

$('.filter a').click(function(e) {
  e.preventDefault();
  var a = $(this).attr('href');
  a = a.substr(1);
  $('.sets div.card-div').each(function() {
    if (!$(this).hasClass(a) && a != 'all')
      $(this).addClass('hide');
    else
      $(this).removeClass('hide');
  });

});

$('.sets div.card-div').click(function(e) {
  e.preventDefault();
  var $i = $(this);
  $('.sets div.card-div').not($i).toggleClass('pophide');
  $i.toggleClass('pop');
});});