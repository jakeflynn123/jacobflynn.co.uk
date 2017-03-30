/**
 * Created by Jacob Flynn on 02/03/2017, all content and code copyright Jacob Flynn © 2017
 */
$(document).ready(function () {
    $('#downarrow').click(function () {
        $("body, html").animate({
            scrollTop: $("#jumper").offset().top
        }, 600);
    });
});

var mq = window.matchMedia( "(min-width: 805px)" );
if (mq.matches) {
    $(document).ready(function () {
        $(window).scroll(function () { // check if scroll event happened
            if ($(document).scrollTop() > 20) { // check if user scrolled more than 20 from top of the browser window
                $("nav > ul").addClass("scrolled");
                $("nav > ul > li").addClass("scrolled");
                $("nav > ul > li:nth-child(2)").fadeIn();
                $("nav > ul > li:nth-child(3)").fadeIn();
                $("nav > ul > li:nth-child(4)").fadeIn();
                $("nav > ul > li:nth-child(5)").fadeIn();
                $("nav > ul > li:first-child").css("font-size", "20px");

            } else {
                $("nav > ul").removeClass("scrolled");
                $("nav > ul > li").removeClass("scrolled");
                $("nav > ul > li:nth-child(2)").fadeOut();
                $("nav > ul > li:nth-child(3)").fadeOut();
                $("nav > ul > li:nth-child(4)").fadeOut();
                $("nav > ul > li:nth-child(5)").fadeOut();
                $("nav > ul > li:first-child").css("font-size", "30px");

            }
        });
    });
}
$(document).ready(function(){
    $('#nav-icon4').click(function(){
        if ($('#menu').css('display') === 'none') {
            $(this).toggleClass('open');
            $('main').css('display', 'none');
            $('#menu').slideDown();
            $(this).css('border-color', 'white');
            $(this).css('background-color', 'white');
        }else{
            $(this).toggleClass('open');
            $('main').css('display', 'block');
            $('#menu').slideUp();
            $(this).css('border-color', 'black');
            $(this).css('background-color', 'black');
            $("#nav-icon4 > span").css('background-color', '#0072CA');
        }
    });
});