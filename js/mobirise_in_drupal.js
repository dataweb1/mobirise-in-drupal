(function ($) {
  Drupal.mobirse_in_drupal = Drupal.mobirse_in_drupal || {};

  Drupal.behaviors.mobirse_in_drupal = {
    attach: function (context) {

    }
  };

  $(window).scroll(function() {
    // If drupal admin toolbar is in place.
    if ($('.toolbar-bar').length > 0) {
      // And mobirise header is in place too.
      if ($('header .top-header').length > 0) {
        // Stick to the bottom of the admin toolbar.
        let headerTop = $('header .top-header').offset().top;
        let adminToolbarHeight = $('.toolbar-bar').height() + $('.toolbar-tray-horizontal.is-active').height();
        let navTop = headerTop - $(window).scrollTop();
        if (headerTop > 0) {
          if (navTop < adminToolbarHeight) {
            navTop = adminToolbarHeight + 1;
          }
        }
        $('nav.navbar').css('top', navTop);
      } else {
        $('nav.navbar').css('position', 'relative');
      }
    }
  });

})(jQuery);
