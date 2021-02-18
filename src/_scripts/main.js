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
        $(window).on('popstate',function(e) {      
          var activeProject = $('.project-page').filter(function() {
            return $(this).hasClass('-visible');
          });
      
          var activeProfile = $('.profile-page').filter(function() {
            return $(this).hasClass('-visible');
          });
          $('.project-page').removeClass('-visible');
          $('.profile-page').removeClass('-visible');
          $('.projects-container').removeClass('-visible')
          if(activeProject.length > 0) {
            var activeProjectIndex = activeProject[0].attributes[0].value;
            // window.history.pushState = `/#portfolio${activeProjectIndex === 0 ? '' : '-' + activeProjectIndex}`;
            fullpage_api.silentMoveTo(`portfolio${activeProjectIndex === 0 ? '' : ('-' + activeProjectIndex)}`, 0)
          }

          if(activeProfile.length > 0) {
            // window.location.href = `team`
            fullpage_api.silentMoveTo('team', 0)
          }
        }),
        $('.-js-link').on('click', function() {
          $('.project-page').removeClass('-visible');
          $('.profile-page').removeClass('-visible');
          $('.projects-container').removeClass('-visible')
          fullpage_api.silentMoveTo($(this).attr('href'), 0)
        }),
        $(window).on('mousewheel', _.debounce(function(e) {
          var activeModal = $('.projects-container').hasClass('-visible');
          var isProjectConatainerChild = $(e.target).parents().filter(function() {
            return $(this).hasClass('projects-container');
          });

          if(isProjectConatainerChild.length > 0) {
            e.stopPropagation();
          }

          if(window.innerWidth > 720 && !activeModal) {
            window.location.href = `/#${fullpage_api.getActiveSection().anchor}`
          }
        }, 10))
      );
    }
});
