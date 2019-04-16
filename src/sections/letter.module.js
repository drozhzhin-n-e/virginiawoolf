$(window).resize(function() {
  toggleContentScrolling();
});

function toggleContentScrolling(){
  var windowWidth = $(window).width();
  var $contentElement = $('#section-farewell-letter .content');

  if (windowWidth < 1000){
    $contentElement.addClass('scrollable');
  } else {
    $contentElement.removeClass('scrollable');
  }
}

toggleContentScrolling();