/* ========================================================================
 * DOM-based Routing
 * Based on http://goo.gl/EUTi53 by Paul Irish
 *
 * Only fires on body classes that match. If a body class contains a dash,
 * replace the dash with an underscore when adding it to the object below.
 *
 * .noConflict()
 * The routing is enclosed within an anonymous function so that you can
 * always reference jQuery with $, even when in .noConflict() mode.
 * ======================================================================== */

(function($) {

  // Use this variable to set up the common and page specific functions. If you
  // rename this variable, you will also need to rename the namespace below.
  var Sage = {
    // All pages
    'common': {
      init: function() {
        // JavaScript to be fired on all pages
        $('.bt-menu').on('click', function() {
            $('.mobile-overlay').fadeToggle();
        });

        $('.bt-menu').click(function(e) {
            $(this).toggleClass('active');
            return false;
        });
        $(window).on('scroll', function() {
            if ($(window).scrollTop() > 60) {
                $('.menu-cont > .brand > img').attr('src', '../wp-content/uploads/2017/10/Group-236.svg');
                $('.menu-cont .brand').addClass('fixed-nav');
            } else {
                $('.menu-cont > .brand > img').attr('src', '../wp-content/uploads/2017/10/Group-61.svg');
                $('.menu-cont .brand').removeClass('fixed-nav');
            }
        });
      },
      finalize: function() {
        // JavaScript to be fired on all pages, after page specific JS is fired
      }
    },
    // Home page
    'home': {
      init: function() {
        // JavaScript to be fired on the home page
      },
      finalize: function() {
        // JavaScript to be fired on the home page, after the init JS
        $(".gray-row").waypoint(function(){
//            $('.gray-row').fadeToggle();
            $('.square').addClass('show');
            $('#graph').addClass('show');
            }, { 
                offset: '65%'
        });
        $(".col-pic-row").waypoint(function(){
            $('.text-col').addClass('show');
            }, { 
                offset: 'bottom-in-view'
        });       
        $(".col-pic-row").waypoint(function(){
            $('.picture-col').addClass('show');
            }, { 
                offset: '65%'
        });
        $(".ready-row").waypoint(function(){
            $('.talk-col').addClass('show');
            }, { 
                offset: 'bottom-in-view'
        });
      }
    },
    // About us page, note the change from about-us to about_us.
    'about_us': {
      init: function() {
        // JavaScript to be fired on the about us page
      }
    },
    // Our Work Page
    'our_work': {
      init: function() {
        // JavaScript to be fired on the about us page
        $('.row-02 .text-cont').on('click', function(){
            $(this).addClass('orange-bg');
            $(this).parent('.col-md-3').siblings('.col-md-3').children('.text-cont').removeClass('orange-bg');
        });
      }
    },
    //solutions
    'solutions': {
      init: function() {



      },
      finalize: function() {
        var listColumns = [
          {
            target: ".marketing-slide-1",
            duration: 200
          },
          {
            target: ".marketing-slide-2",
            duration: 600
          },
          {
            target: ".marketing-slide-3",
            duration: 1000
          },     
          {
            target: ".marketing-slide-4",
            duration: 1400
          },                                   
        ];

        function animateLists (target, duration) {
          $(target)
            .css('opacity', 0)
            .animate(
              { opacity: 1 },
              { queue: false, duration: duration }
            );          
        }
        $(".marketing-btn-opn").on('click', function(e){
          e.preventDefault();
          $('.marketing-learn-more').removeClass('disp-none');
          animateLists(listColumns[0].target, listColumns[0].duration);
          animateLists(listColumns[1].target, listColumns[1].duration);
          animateLists(listColumns[2].target, listColumns[2].duration);
          animateLists(listColumns[3].target, listColumns[3].duration);
        });
        $('.close-marketing').on('click', function(e){
          e.preventDefault();
          $('.marketing-learn-more').addClass('disp-none');
        })
      }
    }

  };

  // The routing fires all common scripts, followed by the page specific scripts.
  // Add additional events for more control over timing e.g. a finalize event
  var UTIL = {
    fire: function(func, funcname, args) {
      var fire;
      var namespace = Sage;
      funcname = (funcname === undefined) ? 'init' : funcname;
      fire = func !== '';
      fire = fire && namespace[func];
      fire = fire && typeof namespace[func][funcname] === 'function';

      if (fire) {
        namespace[func][funcname](args);
      }
    },
    loadEvents: function() {
      // Fire common init JS
      UTIL.fire('common');

      // Fire page-specific init JS, and then finalize JS
      $.each(document.body.className.replace(/-/g, '_').split(/\s+/), function(i, classnm) {
        UTIL.fire(classnm);
        UTIL.fire(classnm, 'finalize');
      });

      // Fire common finalize JS
      UTIL.fire('common', 'finalize');
    }
  };

  // Load Events
  $(document).ready(UTIL.loadEvents);

})(jQuery); // Fully reference jQuery after this point.
