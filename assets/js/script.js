// Window Scroll

// $(window).on("scroll", function () {
//   var scrollTop = $(window).scrollTop();
//   if (scrollTop >= 80) {
//     $("body").addClass("fixed-header");
//   } else {
//     $("body").removeClass("fixed-header");
//   }
// });

$(window).scroll(function () {
  var window_top = $(window).scrollTop() + 1;
  if (window_top > 100) {
    $(".menu-item-fixed-box").addClass("menu-fixed animated fadeInDown");
  } else {
    $(".menu-item-fixed-box").removeClass("menu-fixed animated fadeInDown");
  }
});

// Document Ready
$(document).ready(function(){
   
    // typing animation
    new Typed('#type-it', {
      strings: ['Front-End Developer', 'Designer', 'Pianist'],
      typeSpeed: 100,
      loop: true
    })
    
    // owl carousel
    $('.owl-carousel').owlCarousel({
      loop:true,
      margin:10,
      nav:true,
      responsive:{
          0:{
              items:1
          },
          600:{
              items:3
          },
          1000:{
              items:5
          }
      }
  });

  // one page
  $.scrollIt();
});
