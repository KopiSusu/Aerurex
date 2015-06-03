

$(document).ready(function() {

  // use this for paralax if needed
  $(window).scroll(function() {
    s = $(window).scrollTop();
    w = $(window).width();
    // sticky sidebar
    if (s > 80 && w > 800) {
      $('.sidebar').css('position', 'fixed').css('top', '0%');
    } else {
      $('.sidebar').css('position', 'absolute').css('top', 'auto');
    };

    // parralax effects
    if (w > 800 && s < 800) {
      $('div.main-articles img').css('bottom', '-'+s/3+'px');
    };
  });

  $('section.grid div div.article').on('click', function() {
    $('section.grid div').css('-webkit-column-count', '1');    
  });

});

