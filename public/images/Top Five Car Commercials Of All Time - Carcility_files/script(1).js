																																																																			﻿$(document).ready(function () {
  $('a.back').click(function(){
		parent.history.back();
		return false;
});
$('a[href*="#"]').on('click', function(e) {
  e.preventDefault()

  $('html, body').animate(
    {
      scrollTop: $($(this).attr('href')).offset().top -130,
    },
    500,
    'linear'
  )
});
$('.offer-links li a').click(function(){
    $('.offer-links li').removeClass('active');
    $(this).parent().addClass('active');
});
if ($(window).width() < 769) {
$('#menu-singlepagemenu > li > a').click(function(event){
//alert('test');
event.preventDefault();
});
}
$('.side-menu').click(function(){
$('.menu-sidebar').toggleClass('active');
});
    if ($(window).width() > 769) {
        $('.navbar .dropdown').hover(function () {
            $(this).addClass('open').find('.dropdown-menu').first().stop(true, true).show();
        }, function () {
            $(this).removeClass('open').find('.dropdown-menu').first().stop(true, true).hide();
        });

        $('.navbar .dropdown > a').click(function () {
            location.href = this.href;
        });
    }

    $(function () {
        $("ul.nav li a").each(function () {
            if ($(this).attr("href") == window.location.pathname) {
                $(this).closest('ul.nav').find("li").removeClass("active");
                $(this).parents('li').addClass("active");
            }
        });
    });


 var $container = $('#isotope-list'); //The ID for the list with all the blog posts
 $container.isotope({ //Isotope options, 'item' matches the class in the PHP
 itemSelector : '.item',
   layoutMode : 'masonry'
 });

 //Add the class selected to the item that is clicked, and remove from the others
 var $optionSets = $('#filters'),
 $optionLinks = $optionSets.find('a');

 $optionLinks.click(function(){
 var $this = $(this);
 // don't proceed if already selected
 if ( $this.hasClass('selected') ) {
   return false;
 }
 var $optionSet = $this.parents('#filters');
 $optionSets.find('.selected').removeClass('selected');
 $this.addClass('selected');

 //When an item is clicked, sort the items.
 var selector = $(this).attr('data-filter');
 $container.isotope({ filter: selector });

 return false;
 });


});
 $(window).scroll(function() {
    if($(this).scrollTop() > 50)  /*height in pixels when the navbar becomes non opaque*/
    {
        $('.opaque-navbar').addClass('opaque');
        $('.social-navbar').addClass('stay-fixed');
        $('.social-navbar').removeClass('hide');
    } else {
        $('.opaque-navbar').removeClass('opaque');
        $('.social-navbar').removeClass('stay-fixed');
        $('.social-navbar').addClass('hide');
    }

    if ($(".menu-sidebar").hasClass("active")) {
        $('.menu-sidebar').removeClass('active');
    }
});
