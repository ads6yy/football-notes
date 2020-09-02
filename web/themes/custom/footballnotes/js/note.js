(function ($, Drupal, drupalSettings) {

  Drupal.behaviors.swiperImagesNote = {
    attach: function (context, settings) {
      var swiper = new Swiper('.swiper-container', {
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },
        pagination: {
          el: '.swiper-pagination'
        },
      });
    }
  };

})(jQuery, Drupal, drupalSettings);
