// Main javascript entry point
// Should handle bootstrapping/starting application

'use strict';

global.$ = global.jQuery;
//global._ = require('underscore');

var Header = require('../_modules/header/header');
var Slider = require('../_modules/slider/slider');
const fullPageCustom = require('./fullPageCustom');

$(function() {

    new Header();
    new Slider();

    if (window.matchMedia("(min-width: 760px)").matches) {
      new fullpage(
        '#fullpage',
        {
          scrollOverflow: true,
          dragAndMove: true,
          fixedElements: '.header'
        },
        $('.project-page__hero__close-button').on('click', function() {
          var projectIndex = $(this).parent().parent().parent().data('content');

          fullpage_api.silentMoveTo(`portfolio${projectIndex !== 0 ? ('-' + projectIndex) : ''}`, 0)
        }),
        console.log($('[data-anchors]')),
        $('.profile-page__hero__close-button').on('click', function() {
          fullpage_api.silentMoveTo('team', 0)
        })
      );
    }
});
