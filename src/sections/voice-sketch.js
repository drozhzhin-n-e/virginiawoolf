/*
  Store an array of amplitude values and draw them over time.

  Inspired by http://tybenz.com/visualizr.

  getLevel() from the p5.Amplitude object and map it to the ellipse position.

  Press "T" to toggle between a sound file and audio input (mic).
 */

var mic, soundFile;
var amplitude;

var prevLevels = new Array(60);
var voicePlayButton = document.getElementById('voice-play');
var isVoiceSpinner;

//section-voice

var sketch = function(p) {
  p.setup = function(){
    p.createCanvas(p.windowWidth, p.windowHeight);
    p.background(0);
    p.noStroke();

    p.rectMode(p.CENTER);
    p.colorMode(p.HSB);

    //mic = new p5.AudioIn();
    //mic.start();

    // load the sound, but don't play it yet
    soundFile = p.loadSound('audio/Virginia_Woolf_Voice_Recording_BBC_Words_Fail_Me_1937.flac')

    amplitude = new p5.Amplitude();
    //amplitude.setInput(mic);
    amplitude.smooth(0.6);
  }

  p.draw = function(){
    p.background('#131313');
    p.fill(255, 10)
    //p.text('press t to toggle source', 20, 20);

    var level = amplitude.getLevel();

    // rectangle variables
    var spacing = 10;
    var w = p.width/ (prevLevels.length * spacing);

    var minHeight = 2;
    var roundness = 20;

    // add new level to end of array
    prevLevels.push(level);

    // remove first item in array
    prevLevels.splice(0, 1);

    // loop through all the previous levels
    for (var i = 0; i < prevLevels.length; i++) {

      var x = p.map(i, prevLevels.length, 0, p.width/2, p.width);
      var h = p.map(prevLevels[i], 0, 0.5, minHeight, p.height);

      var alphaValue = logMap(i, 0, prevLevels.length, 1, 250);

      var hueValue = p.map(h, minHeight, p.height, 200, 255);

      p.fill('#999');

      p.rect(x, p.height/2, w, h);
      p.rect(p.width - x, p.height/2, w, h);
    }

  }

  p.windowResized = function(){
    p.resizeCanvas(p.windowWidth, p.windowHeight);
    p.background(0);
  }
};
var P5;

function voiceToggle(){
  if (!P5) {
    P5 = new p5(sketch, 'voice');
  }
  
  if (isVoiceSpinner) {
    voicePause();
    return;
  }
  if (soundFile.isPlaying()) {
    voicePause();
  } else {
    voicePlay();
  }
}

function voicePause(){
  soundFile.pause();
  voicePlayButton.classList.remove("show-spinner");
  voicePlayButton.classList.remove("active");
  if (isVoiceSpinner){
    stopCheckPlaying();
  }
}

function voicePlay(){
  try {
    if (!soundFile.isPlaying()) {
      soundFile.play();
      amplitude.setInput(soundFile);
      voicePlayButton.classList.add("active");
      stopCheckPlaying();
    }
  }
  catch (e) {
    if (!isVoiceSpinner){
      voicePlayButton.classList.add("show-spinner");
      checkPlaying();
    }
  }
}

function checkPlaying(){
  isVoiceSpinner = setInterval(function() {
    if (soundFile.isPlaying()) {
      stopCheckPlaying();
    } else {
      voicePlay();
    }
  }, 200);
}

function stopCheckPlaying(){
  clearInterval(isVoiceSpinner);
  isVoiceSpinner = false;
  voicePlayButton.classList.remove("show-spinner");
}