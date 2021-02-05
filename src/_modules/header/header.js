'use strict';
var _ = require('lodash');
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
  // var slider = $('.home__portfolio__slider');

  // fullpage_api.responsiveSlides.toSections();

  if(window.innerWidth < 720 || window.location.pathname === '/contacto/' || window.location.hash === '#investment-philosophy' || window.location.hash === '#team') {
    body.removeClass('-hideOverflow');
    console.log($(this).offset)
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
    }

    // if(window.innerWidth > 720) {
    //   projectsPages.removeClass('-visible');
    //   profilesPages.removeClass('-visible');
    //   projectsContainer.removeClass('-visible')

    //   if($(this).children('a').attr('href').includes("investment-philosophy") || $(this).children('a').attr('href').includes("team")) {
    //     body.removeClass('-hideOverflow');
    //   }
    // }
  })
  
  // $(window).on('scroll', function() {
  //     if(window.scrollY > 150) {
  //       header.addClass('-scrolled');
  //     } else {
  //       header.removeClass('-scrolled');
  //     }
  // })

  openProjectButton.on('click', function() {
    var index = $(this).data('target');
    var projectToShow = projectsPages.filter(function(project) {
      return $(this).data('content') == index
    })

    projectsContainer.addClass('-visible')
    projectToShow.addClass('-visible');
    body.addClass('-hideOverflow');
  })

  closeProjectButton.on('click', function()  {
    projectsPages.removeClass('-visible');
    projectsContainer.removeClass('-visible')

    if(window.innerWidth < 720) {
      body.removeClass('-hideOverflow');
    }
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

    if(window.innerWidth < 720 || window.scrollY > $('#investment-philosophy')[0].offsetTop) {
      body.removeClass('-hideOverflow');
    }
  })

  // function scrollDirection(e) {
  //   if (e.originalEvent.wheelDelta > 0){
  //     return 'up'
  //   } else {
  //     return 'down'
  //   }
  // }

  // $(document).on('mousewheel', _.debounce(function(e) {
  //   if(window.innerWidth > 720) {
  //     var portfolio = e.originalEvent.path.filter(function(target) {
  //       return $(target)[0].className == 'home__portfolio'
  //     })
  
  //     var purpose = e.originalEvent.path.filter(function(target) {
  //       return $(target)[0].className == 'home__purpose'
  //     })
  
  //     var investment = e.originalEvent.path.filter(function(target) {
  //       return $(target)[0].className == 'home__investment-philosophy'
  //     })
  
  //     var slide = e.originalEvent.path.filter(function(target) {
  //       return target.className == 'home__portfolio__slide'
  //     })
  
  //     var slideIndex = $(slide[0]).children('.project').data('ref');
  
  //     if(purpose.length > 0 && scrollDirection(e) == 'down') {
  //       $('html, body').animate({
  //         scrollTop: $('.home__portfolio').offset().top + -70
  //       }, 1000, function() {
  //         var $target = $('.home__portfolio');
  //         $target.focus();
  //       })
  //     }
  
  //     if(portfolio.length > 0 && scrollDirection(e) == 'down') {
  //       if(slideIndex == 10) {
  //         body.removeClass('-hideOverflow');
  //         $('html, body').animate({
  //           scrollTop: $('.home__investment-philosophy').offset().top + -70
  //         }, 1000, function() {
  //           var $target = $('.home__investment-philosophy');
  //           $target.focus();
  //         });
  //       } else {
  //         slider.slick('slickNext');
  //       }
  //     }
  
  //     if(portfolio.length > 0 && scrollDirection(e) == 'up') {
  //       if(slideIndex == 0) {
  //         $('html, body').animate({
  //           scrollTop: $('.home__purpose').offset().top + -130
  //         }, 1000, function() {
  //           var $target = $('.home__purpose');
  //           $target.focus();
  //         });
  //       } else {
  //         slider.slick('slickPrev');
  //       }
  //     }
  
  //     if(investment.length > 0 && scrollDirection(e) == 'up') {
  //       if(window.scrollY <= $(investment)[0].offsetTop) {
  //         // body.addClass('-hideOverflow');
  //         $('html, body').animate({
  //           scrollTop: $('.home__portfolio').offset().top + -70
  //         }, 1000, function() {
  //           var $target = $('.home__portfolio');
  //           $target.focus();
  //         });
  //       }
  //     }
  //   }
  // }, 50))

  // var sections = $('.-js-link');
  // var scrollValue;
  
  // sections.on('click', function() {
  //   if($(this).attr('href').includes('purpose')) {
  //     scrollValue = 130;
  //   } else {
  //     scrollValue = 70;
  //   }
  // })


  // $('a[href*="#"]')
  // // Remove links that don't actually link to anything
  // .not('[href="#buscar"]')
  // .not('[href="#"]')
  // .not('[href="#0"]')
  // .not('[href="#registro"]')
  // .not('[href="#login"]')
  // .click(function(event) {
  //     // On-page links
  //     if (
  //         location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '')
  //         &&
  //         location.hostname == this.hostname
  //     ) {
  //       // Figure out element to scroll to
  //         var target = $(this.hash);
  //         target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
  //         // Does a scroll target exist?
  //         if (target.length) {
  //             // Only prevent default if animation is actually gonna happen
  //             event.preventDefault();

  //             $('html, body').animate({
  //                 scrollTop: target.offset().top + -scrollValue
  //             }, 1000, function() {
  //             // Callback after animation
  //             // Must change focus!
  //                 var $target = $(target);
  //                 $target.focus();
  //             });
  //         }
  //     }
  // });
};

module.exports = Header;
