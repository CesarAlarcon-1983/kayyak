'use strict';

// Constructor
var Slider = function() {
    var slider = $('._slider');
    if (slider && window.innerWidth > 760) {
        slider.each(function(){
            $(this).slick({
                dots: false,
                fade: false,
                arrows:  false,
                autoplay: false,
                vertical: true,
                verticalSwiping: true,
                infinite: false,
                slidesToShow: 1,
                slidesToScroll: 1,
                responsive: [
                    {
                      breakpoint: 768,
                      settings: {
                        arrows: false,
                        centerMode: false,
                        slidesToShow: 1
                      }
                    },
                    {
                      breakpoint: 480,
                      settings: {
                        arrows: false,
                        centerMode: false,
                        slidesToShow: 1
                      }
                    }
                  ]
            });
        });
    }
};

module.exports = Slider;