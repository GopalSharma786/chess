// SLICK SINGLE SLIDER

(function($) {
  'use strict';

  $(function() {
    $('.single-item').slick({
          //dots: true,
          arrows: true,
          fade: true,
          cssEase: 'cubic-bezier(0.7, 0, 0.3, 1)',
          touchThreshold: 100,
          infinite: true,
          speed: 1500,
          slidesToShow: 1,
          slidesToScroll: 1,
          autoplay: true,
          autoplaySpeed: 3000,
          pauseOnHover: false,
          pauseOnFocus: false,
      });
  });
})(jQuery);

// SLICK PRODUCT CAROUSEL

(function($) {
  'use strict';

  $(function() {
    $('.products-slider').slick({
          //dots: true,
          //arrows: true,
          infinite: false,
          speed: 1000,
          slidesToShow: 4,
          slidesToScroll: 4,
          responsive: [{
              breakpoint: 1024,
              settings: {
                  slidesToShow: 3,
                  slidesToScroll: 3,
                  infinite: true,
                  dots: true
              }
          }, {
              breakpoint: 600,
              settings: {
                  slidesToShow: 2,
                  slidesToScroll: 2
              }
          }, {
              breakpoint: 480,
              settings: {
                  slidesToShow: 1,
                  slidesToScroll: 1
              }
          }]
      });
  });
})(jQuery);

// PRODUCT RANGE SLIDER

(function($) {
  'use strict';

  $(function() {
    $( "#slider-range" ).slider({
        range: true,
        min: 0,
        max: 500,
        values: [ 75, 300 ],
        slide: function( event, ui ) {
          $( "#amount" ).val( "$" + ui.values[ 0 ] + " - $" + ui.values[ 1 ] );
        }
      });
      $( "#amount" ).val( "$" + $( "#slider-range" ).slider( "values", 0 ) +" - $" + $( "#slider-range" ).slider( "values", 1 ) );
      $('#rangeGetValue').click(function() {
        //alert($('#amount').val());
        console.log($('#amount').val());
    });
  });
})(jQuery);

// PRODUCT EASY ZOOMER WITH THUMBNAILS FUNCTION

(function($) {
  'use strict';

  $(function() {
    // Instantiate EasyZoom instances
    var $easyzoom = $('.easyzoom').easyZoom();

    // Setup thumbnails example
    var api1 = $easyzoom.filter('.easyzoom--with-thumbnails').data('easyZoom');

    $('.pro-images-thumbnails').on('click', 'a', function(e) {
      var $this = $(this);

      e.preventDefault();

      // Use EasyZoom's `swap` method
      api1.swap($this.data('standard'), $this.attr('href'));
    });

    // Setup toggles example
    var api2 = $easyzoom.filter('.easyzoom--with-toggle').data('easyZoom');

    $('.toggle').on('click', function() {
      var $this = $(this);

      if ($this.data("active") === true) {
        $this.text("Switch on").data("active", false);
        api2.teardown();
      } else {
        $this.text("Switch off").data("active", true);
        api2._init();
      }
    });
  });
})(jQuery);