var isIntroShown;
var request;
var initialWindowWidth = $(window).width();

function getWords(){
  request = $.ajax({
    url: "/templates/intro.php",
    type: "post",
    data: 'width='+$(window).width(),
  });

  request.done(function (response){
    $("#section-intro .content").html(response);
  });
}
getWords();

$(window).resize(function() {
  var newWindowWidth = $(window).width();

  if (window.utils.getScreenType(initialWindowWidth) !== window.utils.getScreenType(newWindowWidth)){
    initialWindowWidth = $(window).width();
    updateWords();
  }
});

export function startIntro(){
  if (isIntroShown){
    return;
  }
  var index = 0;
  while (index < 20) {
    anime.timeline({loop: false})
      .add({ targets: '#section-intro .line-'+(index + 1)+' .letter', translateY: [30,0], translateZ: 0, opacity: [0,1], easing: "easeOutExpo", duration: 6000,
        delay: function(el, i) {
          return index*500 + 150 * i;
        }
      });
    index++;
  }
  isIntroShown = true;
}

function updateWords(){
  getWords();

  request.done(function (response){
    isIntroShown = false;
    startIntro();
  });
}