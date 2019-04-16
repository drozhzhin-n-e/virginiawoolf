window.utils = (function () {
  return {
    getScreenType(width){
      if (width > 1400) {
        return 'desktop';
      }
      if (width >= 769 && width <= 1400) {
        return 'laptop';
      }
      if (width > 600 && width <= 768) {
        return 'tablet';
      }
      if (width <= 600) {
        return 'mobile';
      }
    }
  };
})();