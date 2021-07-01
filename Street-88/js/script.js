$(document).ready(function(){

                        /* Табы */

    $('ul.catalog__tabs').on('click', 'li:not(.catalog__tab_active)', function() {
      $(this)
        .addClass('catalog__tab_active').siblings().removeClass('catalog__tab_active')
        .closest('section.catalog').find('div.catalog__content').removeClass('catalog__content_active').eq($(this).index()).addClass('catalog__content_active');
    });

                        /* Menu */

    $('ul.menu').on('click', 'li:not(.menu__page_active)', function() {
      $(this)
        .addClass('menu__page_active').siblings().removeClass('menu__page_active')
    });

                /* Якорем */

    /* $('ul.menu').on('click', 'li:not(.menu__link_active)', function() {
      $(this)
      .addClass('menu__link_active').siblings().removeClass('menu__link_active')
      
    });
 
    var tabIndex = window.location.hash.replace('#tab','')-1;
    if (tabIndex != -1) $('ul.menu li').eq(tabIndex).click();
 
    $('a[href*=#tab]').click(function() {
      var tabIndex = $(this).attr('href').replace(/(.*)#tab/, '')-1;
      $('ul.menu li').eq(tabIndex).click();
    }); */



}); 