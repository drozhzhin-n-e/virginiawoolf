//var Flickity = require('flickity');

var $carouselQuotes = new Flickity( '#section-quotes .carousel', {
  "prevNextButtons": false, 
  "selectedAttraction": 0.04, 
  "friction": 0.45,
  on: {
    change: function(index) {
      onFlickitychange(index);
    }
  }
});

function onFlickitychange(index) {
  $('.flickity-page-dots').attr('class', $('.flickity-page-dots').attr('class').replace(/\bactive-\d+\b/g, ''));
  $('.flickity-page-dots').addClass('active-' + index);
  $('#section-quotes .counter-wrapper .counter .current').text(index+1);
};