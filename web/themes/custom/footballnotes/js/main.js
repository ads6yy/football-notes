(function ($, Drupal) {

  Drupal.behaviors.selectPicker = {
    attach: function attach(context) {
      $('.selectpicker').selectpicker();
    }
  }

})(jQuery, Drupal);
