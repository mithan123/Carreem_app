$(function(){
    $("a.navlinks").each(function(){
        var href = $(this).attr('href');
        var heading = $(this).html();
        $('.sidenav').append('<a href="'+href+'">'+heading+'</a>');
    });
    $("li.navlinks").each(function(){
        var heading = $(this).html();
        $('.sidenav').append(heading);
    });
    $('.scrolltoplink').click(function() {
        $('html, body').animate({
            scrollTop: 0
        }, 800);
    });
    if($('.fb').length > 0){
        $('.fb').fancybox();
    }
    $('nav ul.nav li.dropdown').hover(function() {
        $(this).find('.dropdown-menu').stop(true, true).delay(200).fadeIn();
    }, function() {
        $(this).find('.dropdown-menu').stop(true, true).delay(500).fadeOut();
    });
    $('header a.dropdown-toggle').click(function(){
        var link = $(this).attr('href');
        window.location.href = link;
    });
});



    $.fn.jQuerySimpleCounter = function( options ) {
        var settings = $.extend({
            start:  0,
            end:    100,
            easing: 'swing',
            duration: 400,
            complete: ''
        }, options );

        var thisElement = $(this);
        
        $({count: settings.start}).animate({count: settings.end}, {
            duration: settings.duration,
            easing: settings.easing,
            step: function() {
                var mathCount = Math.ceil(this.count);
                thisElement.text(mathCount);
            },
            complete: settings.complete
        });
    };


$('#number1').jQuerySimpleCounter({end: 18,duration: 3000});
$('#number2').jQuerySimpleCounter({end: 20,duration: 3000});
$('#number3').jQuerySimpleCounter({end: 1200,duration: 2000});



    /* AUTHOR LINK */
     $('.about-me-img').hover(function(){
            $('.authorWindowWrapper').stop().fadeIn('fast').find('p').addClass('trans');
        }, function(){
            $('.authorWindowWrapper').stop().fadeOut('fast').find('p').removeClass('trans');
        });
  