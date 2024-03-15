//body preloader
$(window).on('load', function () {
  $("#load").fadeOut();
  $("#preloder").delay(200).fadeOut("slow");
});
// notification js
$(document).ready(function () {
  $(".notification-drop .item").on('click', function () {
    $(this).find('ul').toggleClass('active');
  });
});
// Add active class to the current button (highlight it)
$(function () {
  $('#nav li a').filter(function () {
    return this.href == location.href
  }).parent().addClass('active').siblings().removeClass('active')
  $('#nav li a').click(function () {
    $(this).parent().addClass('active').siblings().removeClass('active')
  })
});
// video frame open popup
//========= glightbox
const lightbox = GLightbox({
  'href': 'https://www.youtube.com/watch?v=r44RKWyfcFw&fbclid=IwAR21beSJORalzmzokxDRcGfkZA1AtRTE__l5N4r09HcGS5Y6vOluyouM9EM',
  'type': 'video',
  'source': 'youtube', //vimeo, youtube or local
  'width': 900,
  'autoplayVideos': true,
});
// Scroll Top
$(document).ready(function () {
  var ScrollTop = $(".scrollToTop");
  $(window).on('scroll', function () {
    if ($(this).scrollTop() < 500) {
      ScrollTop.removeClass("active");
    } else {
      ScrollTop.addClass("active");
    }
  });
  $('.scrollToTop').on('click', function () {
    $('html, body').animate({
      scrollTop: 0
    }, 500);
    return false;
  });
});
