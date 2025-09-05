<?php include_once 'language.php'; ?>

<!DOCTYPE html>
<html lang="<?php echo $language; ?>">
<head>
  <meta charset="utf-8">
  <title><?php echo $lang['TITLE']; ?></title>
  <meta name="viewport" content="width=device-width, initial-scale=1, minimum-scale=1, maximum-scale=1">
  <meta name="description" content="<?php echo $lang['DESCRIPTION']; ?>">
  <meta property="og:title" content="<?php echo $lang['TITLE']; ?>" />
  <meta property="og:description" content="<?php echo $lang['DESCRIPTION']; ?>" />
  <meta property="og:image" content="http://virginiawoolf.name/img/_main.jpg" />
  <link href="https://fonts.googleapis.com/css?family=Playfair+Display:400,400i,700" rel="stylesheet">
  <link href="https://fonts.googleapis.com/css?family=Montserrat:400,400i,500,700" rel="stylesheet">
  <link rel="stylesheet" href="style.css">

  <!-- jquery -->
  <script>
    //window.jQuery = window.$ = require('jquery');
  </script>

  <!-- p5 -->
  <script type="text/javascript" src="lib/p5.min.js"></script>
  <script type="text/javascript" src="lib/p5.dom.js"></script> 
  <script type="text/javascript" src="lib/p5.sound.js"></script> 

  <!-- Yandex.Metrika counter -->
  <script type="text/javascript" >
     (function(m,e,t,r,i,k,a){m[i]=m[i]||function(){(m[i].a=m[i].a||[]).push(arguments)};
     m[i].l=1*new Date();k=e.createElement(t),a=e.getElementsByTagName(t)[0],k.async=1,k.src=r,a.parentNode.insertBefore(k,a)})
     (window, document, "script", "https://mc.yandex.ru/metrika/tag.js", "ym");

     ym(53949502, "init", {
          clickmap:true,
          trackLinks:true,
          accurateTrackBounce:true,
          webvisor:true
     });
  </script>
  <noscript><div><img src="https://mc.yandex.ru/watch/53949502" style="position:absolute; left:-9999px;" alt="" /></div></noscript>
  <!-- /Yandex.Metrika counter -->
</head>
<body class="preloader">
  <div class="logo">
    <b><?php echo $lang['Virginia']; ?></b> 
    <span><?php echo $lang['Woolf']; ?></span>
  </div>
  <div class="langs">
    <span class="label"><?php echo $lang['Language']; ?></span>
    <a class="<?php echo ($language == 'en') ? 'active' : '' ?>" href="?lang=en">EN</a>
    <a class="<?php echo ($language == 'ru') ? 'active' : '' ?>" href="?lang=ru">RU</a>
  </div>

  <!-- Preloader -->
  <div id="main-preloader">
    <div class="logo"></div>
    <div class="percent"></div>
    <div class="progressbar"></div>
  </div>

  <div id="icon-menu"></div>
  <div id="sidenav">
    <div class="close"></div>
    <div class="items">
      <div class="item item-section-intro active" data-section="2"><?php echo $lang['Intro']; ?></div>
      <div class="item item-section-quotes" data-section="3"><?php echo $lang['Quotes']; ?></div>
      <div class="item item-section-voice" data-section="4"><?php echo $lang['Voice']; ?></div>
      <div class="item item-section-gallery" data-section="5"><?php echo $lang['Gallery']; ?></div>
      <div class="item item-section-timeline" data-section="6"><?php echo $lang['Timeline']; ?></div>
      <div class="item item-section-farewell-letter" data-section="7"><?php echo $lang['Farewell_letter']; ?></div>
      <div class="item item-about" onclick="window.openModal('about-modal', 500)"><?php echo $lang['About_and_Credits']; ?></div>
    </div>
  </div>

  <div id="fullpage">
    <!-- Home -->
    <div class="section active" id="section-home">
      <div class="content">
        <div class="site-type"><?php echo $lang['HOME_TITLE']; ?></div>
        <div class="title">
          <div><?php echo $lang['Virginia']; ?></div> 
          <div><?php echo $lang['Woolf']; ?></div>
        </div>
        <div class="subtitle"><?php echo $lang['SLOGAN']; ?></div>
      </div>
      <video muted playsinline autoplay id="main-video">
        Your browser does not support the video tag.
      </video>
      <div class="scroll-to-explore">
        <div class="arrow"></div>
        <span><?php echo $lang['Scroll_to_explore']; ?></span>
      </div>
    </div>
    <!-- / Home -->

    <!-- Intro -->
    <div class="section" id="section-intro">
      <div class="content">
        <div class="description"><?php echo $lang['DESCRIPTION']; ?></div>
      </div>
    </div>
    <!-- / Intro -->

    <!-- Quotes -->
    <div class="section" id="section-quotes">
      <div class="content">
        <div class="counter-wrapper counter-top">
          <div class="counter">
            <span class="current">1</span>/<?php echo count($quotes); ?>
          </div>
        </div>
        <div class="carousel">
          <?php foreach($quotes as $index=>$quote): ?>
            <div class="carousel-cell quote-<?php echo $index+1; ?>">
              <div class="text"><?php echo $quote; ?></div>
              <div class="backdrop"></div>
            </div>
          <?php endforeach; ?>
        </div>
        <div class="counter-wrapper counter-bottom">
          <div class="counter">
            <span class="current">1</span>/<?php echo count($quotes); ?>
          </div>
        </div>
      </div>
    </div>
    <!-- / Quotes -->

    <!-- Voice -->
    <div class="section" id="section-voice">
      <div id="voice"></div>
      <div class="control">
        <div class="play" id="voice-play">
          <div class="spinner">
            <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1" width="34px" height="34px" viewBox="0 0 28 28">
              <g class="qp-circular-loader">
                <path class="qp-circular-loader-path" fill="none" d="M 14,1.5 A 12.5,12.5 0 1 1 1.5,14" stroke-linecap="round" />
              </g>
            </svg>
          </div>
        </div>
        <div class="title">
          <?php echo $lang['VOICE_TITLE']; ?>
        </div>
      </div>
    </div>
    <!-- / Voice -->

    <!-- Gallery -->
    <div class="section" id="section-gallery">
      <div class="swiper-container">
        <div class="swiper-wrapper">
          <?php foreach($gallery as $index=>$slide): ?>
            <div class="swiper-slide">
              <div class="slide-wrapper">
                <div class="counter"><span class="current"><?php echo $index+1; ?></span>/<?php echo count($gallery); ?></div>
                <img src="img/photos/<?php echo $slide['filename']; ?>" class="<?php echo $slide['orientation']; ?>">
                <div class="year"><?php echo $slide['year']; ?></div>
                <div class="desc"><?php echo $slide['desc']; ?></div>
              </div>
            </div>
          <?php endforeach; ?>
        </div>
      </div>
    </div>
    <!-- / Gallery -->

    <!-- Timeline -->
    <div class="section section-shadow shadow-white" id="section-timeline">
      <div class="content">
        <div class="carousel">
          <?php foreach($timeline as $index=>$cell): ?>
            <div class="carousel-cell">
              <div class="img">
                <img src="img/photos/<?php echo $cell['filename']; ?>">
              </div>
              <div class="date"><span><?php echo $cell['date']; ?></span></div>
              <div class="title"><span><?php echo $cell['title']; ?></div>
              <div class="desc"><?php echo $cell['desc']; ?></div>
            </div>
          <?php endforeach; ?>
        </div>
        <div class="nav">
          <div class="year active" data-index="0"><span>1880</span></div>
          <div class="year" data-index="1"><span>1890</span></div>
          <div class="year" data-index="2"><span>1900</span></div>
          <div class="year" data-index="4"><span>1910</span></div>
          <div class="year" data-index="6"><span>1920</span></div>
          <div class="year" data-index="12"><span>1930</span></div>
          <div class="year" data-index="13"><span>1940</span></div>
        </div>
      </div>
    </div>
    <!-- / Timeline -->

    <!-- Farewell letter -->
    <div class="section" id="section-farewell-letter">
      <div class="content">
        <div class="scroll-content">
          <div class="date"><?php echo $lang['LETTER_DATE']; ?></div>
          <div class="title"><?php echo $lang['LETTER_TITLE']; ?></div>
          <div class="text">
            <span><?php echo $lang['LETTER_Dearest']; ?></span><br /><br />
            <span><?php echo $lang['LETTER_TEXT']; ?></span><br />
            <span><?php echo $lang['LETTER_V']; ?></span>
          </div>
        </div>
      </div>
    </div>
    <!-- / Farewell letter -->
  </div>

  <!-- About modal -->
  <div class="modal-container" id="about-modal">
    <div class="close" onclick="window.closeModal('about-modal')"></div>
    <div class="modal">
      <div class="modal-content">
        <h1><?php echo $lang['About_and_Credits']; ?></h1>
        <p><span><?php echo $lang['ABOUT']; ?></span></p>

        <div class="copyright">
          <div class="row">
            <div class="label">DEVELOPMENT</div>
            Nikita Drozhzhin
          </div>
          <div class="row">
            <div class="label">DESIGN</div>
            Diana Dubina
          </div>
        </div>
      </div>
    </div>
  </div>
  <!-- / About modal -->

  <script type="text/javascript" src="app.bundle.js"></script> 
</body>
</html>