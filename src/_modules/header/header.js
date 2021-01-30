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

  menuOpen.on('click', function(){
      header.toggleClass('-open');
      body.toggleClass('-hideOverflow');
  });
  
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

    // var projectHeight = projectToShow
    projectsContainer.addClass('-visible')
    profileToShow.addClass('-visible');
    body.addClass('-hideOverflow');
  })

  closeProfileButton.on('click', function()  {
    profilesPages.removeClass('-visible');
    projectsContainer.removeClass('-visible')
    body.removeClass('-hideOverflow');
  })
};

module.exports = Header;
