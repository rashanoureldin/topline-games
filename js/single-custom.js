(function($) { "use strict";


    /* Nice Scroll */

   jQuery("html").niceScroll({
      scrollspeed: 60,
      mousescrollstep: 38,
      cursorwidth: 8,
      cursorborder: 0,
      cursorcolor: '#001d34',
      autohidemode: true,
      zindex: 9999999,
      horizrailenabled: false,
      cursorborderradius: 10,
    });

    jQuery('.prosubheader .nav').onePageNav();


})(jQuery);
/* end custom js */
smoothScroll.init({
      speed: 500,
      easing: 'easeInOutCubic',
      offset: 0,
      updateURL: true,
      callbackBefore: function ( toggle, anchor ) {},
      callbackAfter: function ( toggle, anchor ) {}
    });