(function ($) {
  Drupal.mobirse_in_drupal = Drupal.mobirse_in_drupal || {};

  Drupal.behaviors.mobirse_in_drupal = {
    attach: function (context) {

    }
  };

  $(window).scroll(function() {

    if ($('header .top-header').length > 0) {
      let headerTop = $('header .top-header').offset().top;
      let adminToolbarHeight = $('.toolbar-bar').height() + $('.toolbar-tray-horizontal.is-active').height();
      let navTop = headerTop - $(window).scrollTop();
      if (headerTop > 0) {
        if (navTop < adminToolbarHeight) {
          navTop = adminToolbarHeight + 1;
        }
      }
      $('nav.navbar').css('top', navTop);
    }
    else {
      $('nav.navbar').css('position', 'relative');
    }
  });

})(jQuery);
