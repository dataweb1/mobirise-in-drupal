(function ($) {
  Drupal.mobirse_in_drupal = Drupal.mobirse_in_drupal || {};

  Drupal.behaviors.mobirse_in_drupal = {
    attach: function (context) {

    }
  };

  const myTimeout = setTimeout(positionNavigation, 100);

  $(window).resize(function() {
    positionNavigation();
  });

  $(window).scroll(function() {
    positionNavigation();
  });


  function positionNavigation() {
    // If drupal admin toolbar is in place.
    if ($('.toolbar-bar').length > 0) {
      // Determine the admin toolbar height.
      let toolbarTrayHeight = 0;
      if ($('.toolbar-tray-horizontal').hasClass('is-active')) {
        toolbarTrayHeight = $('.toolbar-tray-horizontal').height();
      }
      let adminToolbarHeight = $('.toolbar-bar').height() + toolbarTrayHeight;

      // Correct the body top padding.
      $('body').css('padding-top', adminToolbarHeight);

      // Position the Mobirise to there is a navbar in place.
      if ($('nav.navbar').length > 0) {
        let headerTop;
        // Position the Mobirise navbar to the header top position if a header is in place.
        if ($('header .top-header').length > 0) {
          headerTop = $('header .top-header').offset().top;
        }
        else {
          // Position the Mobirise navbar at under the admin toolbar.
          headerTop = adminToolbarHeight;

          // Correct the body top padding.
          $('body').css('padding-top', adminToolbarHeight + $('nav.navbar').height());
        }

        let navTop = headerTop - $(window).scrollTop();
        if ($(window).scrollTop() > (adminToolbarHeight)) {
          navTop = adminToolbarHeight;
        }
        $('nav.navbar').css('top', navTop);
      }
    }
  }


})(jQuery);
