//var Flickity = require('flickity');

var $carouselTimeline = new Flickity( '#section-timeline .carousel', {
  "prevNextButtons": false,
  "selectedAttraction": 0.04,
  "friction": 0.45,
  "cellAlign": 'left',
  "contain": true,
  "pageDots": false,
  "lazyLoad": true
});

$('#section-timeline .nav').on( 'click', '.year', function() {
  var index = $(this).data('index');
  $carouselTimeline.select(index);
});

$carouselTimeline.on( 'change', function( index ) {
  var indexActive;
  if (index === 0){
    indexActive = 0;
  }
  if (index === 1){
    indexActive = 1;
  }
  if (index === 2){
    indexActive = 2;
  }
  if (index === 2 || index === 3){
    indexActive = 2;
  }
  if (index === 4 || index === 5){
    indexActive = 3;
  }
  if (index === 6 || index === 7 || index === 8 || index === 9 || index === 10 || index === 11){
    indexActive = 4;
  }
  if (index === 12){
    indexActive = 5;
  }
  if (index === 13){
    indexActive = 6;
  }

  $('#section-timeline .nav .year').removeClass('active');
  $('#section-timeline .nav .year:eq('+ indexActive+')').addClass('active');
});
