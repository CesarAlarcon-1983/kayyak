'use strict';

// Constructor
var Header = function() {
  var header = $('.header');
  var body = $('body');
  var main = $('main');
  var menuOpen = $('.header__hamburguer');
  var openProjectButton = $('.project__more-button');
  var openProfileButton = $('.home__team__profile-button');
  var projectsContainer = $('.projects-container');
  var projectsPages = $('.project-page');
  var profilesPages = $('.profile-page');
  var closeProjectButton = $('.project-page__hero__close-button')
  var closeProfileButton = $('.profile-page__hero__close-button')
  var menuItems = $('.header__item');

  menuOpen.on('click', function(){
      header.toggleClass('-open');
      body.toggleClass('-hideOverflow');
  });

  menuItems.on('click', function() {
    header.removeClass('-open');
    projectsPages.removeClass('-visible');
    profilesPages.removeClass('-visible');
    projectsContainer.removeClass('-visible')
    body.removeClass('-hideOverflow');
  })
  
  $(window).on('scroll', function() {
      if(window.scrollY > 150) {
        header.addClass('-scrolled');
      } else {
        header.removeClass('-scrolled');
      }
  })

  openProjectButton.on('click', function() {
    var index = $(this).data('target');
    var projectToShow = projectsPages.filter(function(project) {
      return $(this).data('content') == index
    })

    // var projectHeight = projectToShow
    projectsContainer.addClass('-visible')
    projectToShow.addClass('-visible');
    body.addClass('-hideOverflow');
  })

  closeProjectButton.on('click', function()  {
    projectsPages.removeClass('-visible');
    projectsContainer.removeClass('-visible')
    body.removeClass('-hideOverflow');
  })

  openProfileButton.on('click', function() {
    var index = $(this).data('target');
    var profileToShow = profilesPages.filter(function(profile) {
      return $(this).data('content') == index
    })

    projectsContainer.addClass('-visible')
    profileToShow.addClass('-visible');
    body.addClass('-hideOverflow');
  })

  closeProfileButton.on('click', function()  {
    profilesPages.removeClass('-visible');
    projectsContainer.removeClass('-visible')
    body.removeClass('-hideOverflow');
  })

  $('a[href*="#"]')
  // Remove links that don't actually link to anything
  .not('[href="#buscar"]')
  .not('[href="#"]')
  .not('[href="#0"]')
  .not('[href="#registro"]')
  .not('[href="#login"]')
  .click(function(event) {
      // On-page links
      if (
          location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '')
          &&
          location.hostname == this.hostname
      ) {
        // Figure out element to scroll to
          var target = $(this.hash);
          target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
          // Does a scroll target exist?
          if (target.length) {
              // Only prevent default if animation is actually gonna happen
              event.preventDefault();
              $('html, body').animate({
                  scrollTop: target.offset().top + -69
              }, 1000, function() {
              // Callback after animation
              // Must change focus!
                  var $target = $(target);
                  $target.focus();
              });
          }
      }
  });
};

module.exports = Header;
