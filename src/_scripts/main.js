// Main javascript entry point
// Should handle bootstrapping/starting application

'use strict';

global.$ = global.jQuery;
//global._ = require('underscore');

var Header = require('../_modules/header/header');
var Slider = require('../_modules/slider/slider');

$(function() {

    new Header();
    new Slider();

    if (window.matchMedia("(min-width: 760px)").matches) {
      $('.section').each(function() {
        $(this).attr('id', '');
      });

      new fullpage(
        '#fullpage',
        {
          scrollOverflow: true,
          dragAndMove: true,
          fixedElements: '.header',
        }
      );
      
    }

});
