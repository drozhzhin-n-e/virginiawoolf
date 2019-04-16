/*
 * i18n
 */

var TranslationModule = (function () {

  $(document).ready(function() {
    var lang = $('html').attr('lang');

    if (lang === "en") {
      navigationTranslationEn();
    }
    if (lang === "ru") {
      navigationTranslationRu();
    }
  });


  function navigationTranslationRu(){
    $('.fp-tooltip').each(function(index) {
      switch ($(this).text()) {
        case 'Intro':
          $(this).text('Интро');
          break;
        case 'Quotes':
          $(this).text('Цитаты');
          break;
        case 'Voice':
          $(this).text('Голос');
          break;
        case 'Gallery':
          $(this).text('Галерея');
          break;
        case 'Timeline':
          $(this).text('Таймлайн');
          break;
        case 'Letter':
          $(this).text('Письмо');
          break;
      }
    });
  }

  function navigationTranslationEn(){
    $('.fp-tooltip').each(function(index) {
      switch ($(this).text()) {
        case 'Интро':
          $(this).text('Intro');
          break;
        case 'Цитаты':
          $(this).text('Quotes');
          break;
        case 'Голос':
          $(this).text('Voice');
          break;
        case 'Галерея':
          $(this).text('Gallery');
          break;
        case 'Таймлайн':
          $(this).text('Timeline');
          break;
        case 'Письмо':
          $(this).text('Letter');
          break;
      }
    });
  }
})();