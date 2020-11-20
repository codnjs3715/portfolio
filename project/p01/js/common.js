$(document).ready(function () {
    
    
    
    $(window).scroll(function () {
        if ($(this).scrollTop() > 100) {
            $("#gotop").fadeIn();
        } else {
            $("#gotop").fadeOut();
        }
    });

    $("#gotop").click(function () {
        $("html, body").animate({
            scrollTop: 0
        }, "slow");
        return false;
    });

    
    
    
    
    
    
    $('.depth2').hide();

    $('#gnb>li').mouseover(function () {
        $(this).children('.depth2').stop().slideDown();
    });

    $('#gnb>li').mouseout(function () {
        $(this).children('.depth2').stop().slideUp();
    });



    $('.visual').bxSlider({
        auto: true
    });

    $('.come').bxSlider({
        auto: true,
        controls: false
    });
    
    $('.instar_img').bxSlider({
        auto: true,
         maxSlides: 5,
         moveSlides: 1,
         slideWidth: 240,
         pager: false
        
    });


});
