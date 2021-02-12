'use strict';
var _ = require('lodash');
// Constructor
var Header = function() {
  var header = $('.header');
  var body = $('body');
  var menuOpen = $('.header__hamburguer');
  var openProjectButton = $('.project__more-button');
  var openProfileButton = $('.home__team__profile-button');
  var projectsContainer = $('.projects-container');
  var projectsPages = $('.project-page');
  var profilesPages = $('.profile-page');
  var closeProjectButton = $('.project-page__hero__close-button')
  var closeProfileButton = $('.profile-page__hero__close-button')
  var menuItems = $('.header__item');
  var activeProject = null;
  var activeProfile = null;


  if(window.innerWidth < 720 || window.location.pathname === '/contacto/' || window.location.hash === '#investment-philosophy' || window.location.hash === '#team') {
    body.removeClass('-hideOverflow');
  }

  menuOpen.on('click', function(){
      header.toggleClass('-open');
      body.toggleClass('-hideOverflow');
  });

  menuItems.on('click', function() {
    if(window.innerWidth <= 720) {
      header.removeClass('-open');
      projectsPages.removeClass('-visible');
      profilesPages.removeClass('-visible');
      projectsContainer.removeClass('-visible')
      body.removeClass('-hideOverflow');
    } else {
      activeProfile = null;
      activeProject = null;
    }
  })
  
  openProjectButton.on('click', function() {
    var index = $(this).data('target');
    var projectToShow = projectsPages.filter(function(project) {
      return $(this).data('content') == index
    })

    activeProject = index;
    projectsContainer.addClass('-visible')
    projectToShow.addClass('-visible');
    body.addClass('-hideOverflow');
  })

  closeProjectButton.on('click', function()  {
    projectsPages.removeClass('-visible');
    projectsContainer.removeClass('-visible')
    activeProject = null;

    if(window.innerWidth < 720) {
      body.removeClass('-hideOverflow');
    }
  })

  openProfileButton.on('click', function() {
    var index = $(this).data('target');
    var profileToShow = profilesPages.filter(function(profile) {
      return $(this).data('content') == index
    })

    activeProfile = index;
    projectsContainer.addClass('-visible')
    profileToShow.addClass('-visible');
    body.addClass('-hideOverflow');
  })

  closeProfileButton.on('click', function()  {
    profilesPages.removeClass('-visible');
    projectsContainer.removeClass('-visible')
    activeProfile = null;

    if(window.innerWidth < 720) {
      body.removeClass('-hideOverflow');
    }
  })

  var initialScroll = 0;


  $(document).on('keyup', function(e) {
    initialScroll = $(projectsPages[activeProject]).scrollTop();

    if(activeProject >= 0) {
      var projectHeroHeight = $(projectsPages[activeProject]).children('.project-page__hero').height();
      var projectContentHeight = $(projectsPages[activeProject]).children('.project-page__content').height();
      var projectFooterHeight = $('.project-page__footer').height();
      var projectHeight = projectHeroHeight + projectContentHeight + projectFooterHeight + 70;
      var viewport = body.height();
      var maxScroll = projectHeight - viewport;

      if(e.key === "ArrowDown" && initialScroll < maxScroll) {
        projectsPages.scrollTop(initialScroll + 50);
        initialScroll = initialScroll + 50;
      }
  
      if(e.key === "ArrowUp" && initialScroll > 0) {
        projectsPages.scrollTop(initialScroll - 50);
        initialScroll = initialScroll - 50;
      }
    }

    if(activeProfile && activeProfile >= 0) {
      var profileHeroHeight = $(profilesPages[activeProfile - 1]).children('.profile-page__hero').height();
      var profileContentHeight = $(profilesPages[activeProfile - 1]).children('.profile-page__content').height();
      var profileFooterHeight = $('.profile-page__footer').height();
      var profileHeight = profileHeroHeight + profileContentHeight + profileFooterHeight;
      var viewport = body.height();
      var maxScroll = profileHeight - viewport + 70;

      if(e.key === "ArrowDown" && initialScroll < maxScroll) {
        profilesPages.scrollTop(initialScroll + 50);
        initialScroll = initialScroll + 50;
      }
  
      if(e.key === "ArrowUp" && initialScroll > 0) {
        profilesPages.scrollTop(initialScroll - 50);
        initialScroll = initialScroll - 50;
        console.log(initialScroll)
      }
      }
  })

  $('a[href*="#"]')
  // Remove links that don't actually link to anything
  .not('[href="#buscar"]')
  .not('[href="#"]')
  .not('[href="#0"]')
  .not('[href="#registro"]')
  .not('[href="#login"]')
  .on('click', function(event) {
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
              scrollTop: target.offset().top + - 70
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
