// Main javascript entry point
// Should handle bootstrapping/starting application

'use strict';

global.$ = global.jQuery;
global._ = require('underscore');

var Header = require('../_modules/header/header');
var Slider = require('../_modules/slider/slider');
const fullPageCustom = require('./fullPageCustom');
var location = window.location.pathname;

$(function() {
    console.log(location)
    new Header();
    new Slider();

    if (window.matchMedia("(min-width: 760px)").matches && location === "/") {
      new fullpage(
        '#fullpage',
        {
          scrollOverflow: true,
          dragAndMove: true,
          fixedElements: '.header',
        },
        $('.project-page__hero__close-button').on('click', function() {
          var projectIndex = $(this).parent().parent().parent().data('content');

          fullpage_api.silentMoveTo(`portfolio${projectIndex !== 0 ? ('-' + projectIndex) : ''}`, 0)
        }),
        $('.profile-page__hero__close-button').on('click', function() {
          fullpage_api.silentMoveTo('team', 0)
        }),
        $('.-js-link').on('click', function() {
          $('.project-page').removeClass('-visible');
          $('.profile-page').removeClass('-visible');
          $('.projects-container').removeClass('-visible')
          fullpage_api.silentMoveTo($(this).attr('href'), 0)
        }),
        $(window).on('mousewheel', _.debounce(function() {
          if(window.innerWidth > 720) {
            window.location.href = `/#${fullpage_api.getActiveSection().anchor}`
          }
        }, 10))
      );
    }
});
