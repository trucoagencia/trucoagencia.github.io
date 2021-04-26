window.addEventListener("load", function(event) {
  setTimeout(function(){
document.querySelector(".loader").style="opacity:0;z-index:-99"
},3000)
});

function portfolio(){
  var works = $(".work-box");
  works.click(function(){
    var id = $(this).children("input").val();
     var video = document.querySelector(`#${id}`);
     video.style="opacity:1;z-index:99";
     $(document).on("scroll", function(){
       video.style="opacity:0;z-index:-99";
     });
  });
}
portfolio();

$('.interactive-menu-button a').click(function() {
  $(this).toggleClass('active');
});

var scroll = new SmoothScroll('a[href*="#"]');


$('.more-btn').click(function() {
  $('#hiden-gallery').toggleClass('hide');
  $('#hiden-gallery').toggleClass('open');
  if ( $('#hiden-gallery').is( ".open" ) ) {
    $(".more-btn-inside").text("Ver menos");
  }else {
    $(".more-btn-inside").text("Ver más");
  }
});





function slickify(){
  $('.blog-slider').slick({
      autoplay: true,
      slidesToShow: 3,
      slidesToScroll: 3,
      responsive: [
        {
            breakpoint: 991,
            settings: "unslick"
        }
      ]
  });
  $(".slick-next").text("");
  $(".slick-next").addClass("icofont-long-arrow-right");
  $(".slick-prev").text("");
  $(".slick-prev").addClass("icofont-long-arrow-left");
}

slickify();
$(window).resize(function(){
  var $windowWidth = $(window).width();
  if ($windowWidth > 991) {
      slickify();
      $('#blog-btn').addClass('hide-me');
  }else if($windowWidth < 991) {
    $('#blog-btn').removeClass('hide-me');
  }
});

$('#blog-btn').click(function() {
  $('.hiden-blog').toggleClass('hide-blog');
  $('.hiden-blog').toggleClass('open-blog');
  if ( $('.hiden-blog').is( ".open-blog" ) ) {
    $("#blog-btn").text("Ver menos");
  }else {
    $("#blog-btn").text("Ver más");
  }
});
