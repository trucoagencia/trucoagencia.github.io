window.addEventListener('load', function() {

  $('#video-landing').on('ended', function() {
    $('#video-container').fadeOut();
  });

  $('#saltearBoton').click(function(){
    $('#video-container').fadeOut();
  });

});
