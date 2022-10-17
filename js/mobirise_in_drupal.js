(function ($) {
  Drupal.mobirse_in_drupal = Drupal.mobirse_in_drupal || {};

  Drupal.behaviors.mobirse_in_drupal = {
    attach: function (context) {
      setToolbarHeight();

      $('#toolbar-administration .toolbar-item a').once().on('mouseup', function() {
        setToolbarHeight();
      });
    }
  };

  function setToolbarHeight() {
    $('#toolbar-administration').css('height', '40px');

    // Reset toolbar height if a dropdown menu is in place.
    if ($('#toolbar-administration .toolbar-tray.is-active .toolbar-menu .toolbar-menu').length > 0) {
      $('#toolbar-administration').css('height', 'auto');
    }
  }

})(jQuery);
