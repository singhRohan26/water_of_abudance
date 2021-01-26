

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
$(".switch.switchf1").click(function() {
  $('html, body').animate({
      scrollTop: $(".footscroll").offset().top
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
        items: 1
      },
  
      510: {
        items: 3
      },
    }
  });
  jQuery("#carouselnew").owlCarousel({
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
        items: 1
      },
  
      510: {
        items: 3
      },
    }
  });

  function toggle() {
    var tog = document.querySelector('.toggle');
    var cir = document.querySelector('.circle');

    tog.classList.toggle('clicked');
    cir.classList.toggle('clicked');
    
}

$(document).on('click','.hamburger',function(){
$(this).addClass('active');
$('.headercontent').animate({'left':'0'});
});
$(document).on('click','.hamburger.active',function(){
  $(this).removeClass('active');
  $('.headercontent').animate({'left':'-250px'});
  });

  var vid = document.getElementById("myVideo"); 

function playVid() { 
  vid.play(); 
  $('.videoTag').hide();
} 

function pauseVid() { 
  vid.pause();
} 
$(document).on('click','.videoAll video',function(){
  $('.videoTag').hide();
});
$('#qwe').click(function() {
  $('#file-name').attr("value", "");  
  // $('#ht1').attr("value", "");  
});
$(document).on('scroll',function(){
  $('#file-name').attr("value", " "); 
});


