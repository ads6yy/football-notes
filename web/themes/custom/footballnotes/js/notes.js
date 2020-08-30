(function ($, Drupal, drupalSettings) {

  Drupal.behaviors.reloadSelectPicker = {
    attach: function (context, settings) {
      $('.selectpicker').selectpicker();
    }
  };

})(jQuery, Drupal, drupalSettings);
