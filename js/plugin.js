$(document).ready(() => {
    
    /*
    ** Show navbar on mobile
    */
    
    $('.show-bar-mobile a').click(function(e) {
        e.preventDefault();
        $('nav').toggleClass('show-navbar');
    });
    
    /*
    ** class Active
    */
    
    $('nav .links li a').click(function(e) {
        e.preventDefault();
        $(this).parent('li').addClass('active').siblings('li').removeClass('active');
        if ($('nav').hasClass('show-navbar')) {
            $('nav').removeClass('show-navbar');
        }
    });
    
    /*
    ** Show navbar on scrolling
    */
    $('.show-nav-scroll').fadeOut(0);
    if ($(window).width() < 950) {
        $('.show-nav-scroll').fadeIn(500);
    }
    $(window).scroll(function () {
        if ($(window).width() < 950) {
            $('.show-nav-scroll').fadeIn(500);
        }
        else if ($(window).scrollTop() > 10) {
            $('.show-nav-scroll').fadeIn(500);
        } else {
            $('.show-nav-scroll').fadeOut(500);
        }
    });
    
    /*
    ** Scroll to section
    */
    $('.scroll-to').click(function (e) {
        e.preventDefault();
        let section = $(this).attr('href');
        $('html, body').animate( {
            scrollTop: $('#' + section).offset().top - $('nav').height()
        }, 500);
    });
    
    /*
    ** Sync section with navbar
    */
    $(window).scroll(function () {
        $('header, section').each(function (i) {
            if ($(window).scrollTop() >= $(this).offset().top - $('nav').height() - 100) {
                $('nav li').eq(i).addClass('active').siblings('li').removeClass('active');
            }
        });
    });
    
    /*
    ** CONTACT US SHOW FORM
    */
    
    $('.contact-us').click(function (e) {
        e.preventDefault();
        $('.contact').css('left', '0');
        $('.contact').css('opacity', '1');
    });
    
    $('.contact > a').click(function (e) {
        e.preventDefault();
        $('.contact').css('left', '-100%').css('opacity', '0');
    });
});
