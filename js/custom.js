$(window).scroll(function () {

  if ($(window).scrollTop() >= 1) {
      $('.header').addClass('fixedHeader');
  } else {
      $('.header').removeClass('fixedHeader');
  }
});

$(".switch.switch1").click(function() {
  $('html, body').animate({
      scrollTop: $(".scroll1").offset().top
  }, 1000);
});
$(".switch.switch2").click(function() {
  $('html, body').animate({
      scrollTop: $(".scroll2").offset().top
  }, 1000);
});
$(".switch.switch3").click(function() {
  $('html, body').animate({
      scrollTop: $(".scroll3").offset().top
  }, 1000);
});
$(".switch.switch4").click(function() {
  $('html, body').animate({
      scrollTop: $(".scroll4").offset().top
  }, 1000);
});
$(".switch.switch5").click(function() {
  $('html, body').animate({
      scrollTop: $(".scroll5").offset().top
  }, 1000);
});
$(".switch.switch6").click(function() {
  $('html, body').animate({
      scrollTop: $(".scroll6").offset().top
  }, 1000);
});
$(".switch.switch7").click(function() {
  $('html, body').animate({
      scrollTop: $(".scroll7").offset().top
  }, 1000);
});

$(".switch.switchh1").click(function() {
  $('html, body').animate({
      scrollTop: $(".scrolltop2").offset().top
  }, 1000);
});
$(".switch.switchh2").click(function() {
  $('html, body').animate({
      scrollTop: $(".scrolltop3").offset().top
  }, 1000);
});
$(".switch.switchh3").click(function() {
  $('html, body').animate({
      scrollTop: $(".scrolltop4").offset().top
  }, 1000);
});
$(".switch.switchh4").click(function() {
  $('html, body').animate({
      scrollTop: $(".scrolltop5").offset().top
  }, 1000);
});
$(".switch.switchh5").click(function() {
  $('html, body').animate({
      scrollTop: $(".scrolltop6").offset().top
  }, 1000);
});
$(".switch.switchh6").click(function() {
  $('html, body').animate({
      scrollTop: $(".scrolltop1").offset().top
  }, 1000);
});
jQuery("#carousel").owlCarousel({
    autoplay: false,
    lazyLoad: true,
    loop: true,
    margin:0,
    responsiveClass: true,
    autoHeight: true,
    autoplayTimeout: 7000,
    smartSpeed: 800,
    nav: true,
    navText: ["<img src='imgs/left.svg'>","<img src='imgs/right.svg'>"],
    dots:true,
    responsive: {
      0: {
        items: 1
      }
    }
  });
  jQuery("#carousel22").owlCarousel({
    autoplay: false,
    lazyLoad: true,
    loop: true,
    margin:20,
    responsiveClass: true,
    autoHeight: true,
    autoplayTimeout: 7000,
    smartSpeed: 800,
    nav: true,
    navText: ["<img src='imgs/left.svg'>","<img src='imgs/right.svg'>"],
    dots:true,
    responsive: {
      0: {
        items: 3
      }
    }
  });

  function toggle() {
    var tog = document.querySelector('.toggle');
    var cir = document.querySelector('.circle');

    tog.classList.toggle('clicked');
    cir.classList.toggle('clicked');
}