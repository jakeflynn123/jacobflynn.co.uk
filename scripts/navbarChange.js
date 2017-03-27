/**
 * Created by Jacob Flynn on 02/03/2017, all content and code copyright Jacob Flynn © 2017
 */

$(document).ready(function(){
    $(window).scroll(function() { // check if scroll event happened
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
    $('#downarrow').click(function () {
        $("body, html").animate({
            scrollTop: $("#jumper").offset().top
        }, 600);
    });
});