var $mainPreloader = $('#main-preloader');
var $mainPreloaderLogo = $('#main-preloader .logo');
var $mainPreloaderPercent = $('#main-preloader .percent');
var $mainProgressbar = $('#main-preloader .progressbar');
var mainVideoLoadEnded;
var isPreloader = true;
var initialWindowWidth = $(window).width();
var video = document.getElementById('main-video');
var mainVideo = $('#main-video'); 

addVideoSource();

$(window).resize(function() {
  var newWindowWidth = $(window).width();

  if (window.utils.getScreenType(initialWindowWidth) !== window.utils.getScreenType(newWindowWidth)){
    initialWindowWidth = $(window).width();
    updateVideoSource();
  }
});

$(document).ready(function() {
  video.addEventListener('progress', function() {
    //console.log('buffered.length', this.buffered.length);

    if (this.buffered.length){
      //console.log('buffered.end', this.buffered.end(0));
      //console.log('duration', this.duration);

      var loadedPercentage = this.buffered.end(0) / this.duration;

      if (loadedPercentage) {
        var percent = Math.round(loadedPercentage*100) + '%';

        $mainPreloaderLogo.addClass('shown');
        $mainPreloaderPercent.text(percent);
        $mainProgressbar.width(percent);
      }
      if (loadedPercentage === 1){
        hidePreloader();
        this.play();
      }
    } else {
      hidePreloader();
      this.play();
    }
  });

  // Sidenav
  $("#icon-menu").click(function() {
    $("#sidenav").addClass("shown");
  });

  $("#sidenav .close").click(function() {
    closeSidenav();
  });

  $("#sidenav .item").click(function() {
    setActiveItem($(this));
    closeSidenav();
  });

  // About modal
  $('#about-modal .close').click(function() {
    $("#sidenav .item.item-about").removeClass("active");
  });
});

function closeSidenav(){
  $("#sidenav").removeClass("shown");
}

function setActiveItem($item){
  $("#sidenav .item").removeClass("active");
  $item.addClass("active");
}

video.onplaying = function() {
  if (isPreloader){
    this.pause();
  }
};

function addVideoSource(){
  if ($(window).width() > 768) {
    mainVideo.html("<source type='video/mp4' src='video/main_1366.mp4' />");
  } else {
    mainVideo.html("<source type='video/mp4' src='video/main_768.mp4' />");
  }
}

function updateVideoSource(){
  addVideoSource();
  video.load();
  video.play();
}

function hidePreloader(){
  isPreloader = false;
  $mainPreloader.addClass('hidden');

  setTimeout(function() { 
    $('body').removeClass('preloader'); 
  }, 100);
}