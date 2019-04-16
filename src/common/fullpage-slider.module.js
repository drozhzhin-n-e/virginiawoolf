/*
 * Fullpage slider
 */

var fullpageSlider = new fullpage('#fullpage', {
  sectionsColor: ['#f5f5f5', '#131313', '#131313', '#131313', '#131313', '#f5f5f5', '#131313'],
  navigation: true,
  onLeave: function(origin, destination, direction){
    $('body').removeClass('fp-origin-0 fp-origin-1 fp-origin-2 fp-origin-3 fp-origin-4 fp-origin-5 fp-origin-6');
    $('body').addClass('fp-origin-'+origin.index);
  },
  afterLoad: function(origin, destination){
    setSidenavActiveItem(destination);

    if (origin && origin.item.id === 'section-home'){
      IntroSectionModule.startIntro();
    }
    if (destination && destination.item.id === 'section-voice'){

    }
  },
  navigationTooltips: ['', 'Intro', 'Quotes', 'Voice', 'Gallery', 'Timeline', 'Letter'],
  showActiveTooltip: true,
  normalScrollElements: '#section-farewell-letter .content.scrollable, .modal-container'
});

// Sidenav
$(document).ready(function() {
  $("#sidenav .item").click(function() {
    var sectionIndex = $(this).data('section');

    if (!sectionIndex) {
      return;
    }
    setTimeout(function() { 
      fullpage_api.moveTo(sectionIndex);
    }, 500);
  });
});

function setSidenavActiveItem(destination) {
  if (destination){
    var id = destination.item.id;

    $("#sidenav .item").removeClass("active");
    $("#sidenav .item-"+id).addClass("active");
  }
}