/**
 * Created by Jacob Flynn on 02/03/2017, all content and code copyright Jacob Flynn © 2017
 */

$(function () {
    function myFunction(x) {
        x.classList.toggle("change");
    }
    $('.wrapper > div:nth-child(1) > img').mouseenter(function () {
        $('.wrapper > div:nth-child(1) > .skillstext').fadeIn(100,function(){
            $('.skill').mouseleave(function(){
                $('.skillstext').fadeOut(100);
            });
        });
    });
    $('.wrapper > div:nth-child(2) > img').mouseenter(function () {
        $('.wrapper > div:nth-child(2) > .skillstext').fadeIn(100,function(){
            $('.skill').mouseleave(function(){
                $('.skillstext').fadeOut(100);
            });
        });
    });
    $('.wrapper > div:nth-child(3) > img').mouseenter(function () {
        $('.wrapper > div:nth-child(3) > .skillstext').fadeIn(100,function(){
            $('.skill').mouseleave(function(){
                $('.skillstext').fadeOut(100);
            });
        });
    });
    $('.wrapper > div:nth-child(4) > img').mouseenter(function () {
        $('.wrapper > div:nth-child(4) > .skillstext').fadeIn(100,function(){
            $('.skill').mouseleave(function(){
                $('.skillstext').fadeOut(100);
            });
        });
    });
    $('.wrapper > div:nth-child(5) > img').mouseenter(function () {
        $('.wrapper > div:nth-child(5) > .skillstext').fadeIn(100,function(){
            $('.skill').mouseleave(function(){
                $('.skillstext').fadeOut(100);
            });
        });
    });




    $('#showall').click(function () {
        $(this).fadeIn("slow", function () {
            $(this).addClass('clicked');
            $("#website").removeClass('clicked');
            $("#jquery").removeClass('clicked');
            $("#javascript").removeClass('clicked');
            $("#mysql").removeClass('clicked');
            $("#php").removeClass('clicked');
            $("#server").removeClass('clicked');
            $("#apache").removeClass('clicked');
            $("#laravel").removeClass('clicked');
            $("#sass").removeClass('clicked');
        })
    });
    $('#website').click(function () {
        $(this).fadeIn("slow", function () {
            $(this).addClass('clicked');
            $("#showall").removeClass('clicked');
            $("#jquery").removeClass('clicked');
            $("#javascript").removeClass('clicked');
            $("#mysql").removeClass('clicked');
            $("#php").removeClass('clicked');
            $("#server").removeClass('clicked');
            $("#apache").removeClass('clicked');
            $("#laravel").removeClass('clicked');
            $("#sass").removeClass('clicked');
            $("#seetheuniverse").hide();
        })
    });
    $('#jquery').click(function () {
        $(this).fadeIn("slow", function () {
            $(this).addClass('clicked');
            $("#showall").removeClass('clicked');
            $("#website").removeClass('clicked');
            $("#javascript").removeClass('clicked');
            $("#mysql").removeClass('clicked');
            $("#php").removeClass('clicked');
            $("#server").removeClass('clicked');
            $("#apache").removeClass('clicked');
            $("#laravel").removeClass('clicked');
            $("#sass").removeClass('clicked');
        })
    });
    $('#javascript').click(function () {
        $(this).fadeIn("slow", function () {
            $(this).addClass('clicked');
            $("#showall").removeClass('clicked');
            $("#website").removeClass('clicked');
            $("#jquery").removeClass('clicked');
            $("#mysql").removeClass('clicked');
            $("#php").removeClass('clicked');
            $("#server").removeClass('clicked');
            $("#apache").removeClass('clicked');
            $("#laravel").removeClass('clicked');
            $("#sass").removeClass('clicked');
        })
    });
    $('#mysql').click(function () {
        $(this).fadeIn("slow", function () {
            $(this).addClass('clicked');
            $("#showall").removeClass('clicked');
            $("#website").removeClass('clicked');
            $("#jquery").removeClass('clicked');
            $("#javascript").removeClass('clicked');
            $("#php").removeClass('clicked');
            $("#server").removeClass('clicked');
            $("#apache").removeClass('clicked');
            $("#laravel").removeClass('clicked');
            $("#sass").removeClass('clicked');
        })
    });
    $('#php').click(function () {
        $(this).fadeIn("slow", function () {
            $(this).addClass('clicked');
            $("#showall").removeClass('clicked');
            $("#website").removeClass('clicked');
            $("#jquery").removeClass('clicked');
            $("#javascript").removeClass('clicked');
            $("#mysql").removeClass('clicked');
            $("#server").removeClass('clicked');
            $("#apache").removeClass('clicked');
            $("#laravel").removeClass('clicked');
            $("#sass").removeClass('clicked');
        })
    });
    $('#server').click(function () {
        $(this).fadeIn("slow", function () {
            $(this).addClass('clicked');
            $("#showall").removeClass('clicked');
            $("#website").removeClass('clicked');
            $("#jquery").removeClass('clicked');
            $("#javascript").removeClass('clicked');
            $("#mysql").removeClass('clicked');
            $("#php").removeClass('clicked');
            $("#apache").removeClass('clicked');
            $("#laravel").removeClass('clicked');
            $("#sass").removeClass('clicked');
        })
    });
    $('#apache').click(function () {
        $(this).fadeIn("slow", function () {
            $(this).addClass('clicked');
            $("#showall").removeClass('clicked');
            $("#website").removeClass('clicked');
            $("#jquery").removeClass('clicked');
            $("#javascript").removeClass('clicked');
            $("#mysql").removeClass('clicked');
            $("#php").removeClass('clicked');
            $("#server").removeClass('clicked');
            $("#laravel").removeClass('clicked');
            $("#sass").removeClass('clicked');
        })
    });
    $('#laravel').click(function () {
        $(this).fadeIn("slow", function () {
            $(this).addClass('clicked');
            $("#showall").removeClass('clicked');
            $("#website").removeClass('clicked');
            $("#jquery").removeClass('clicked');
            $("#javascript").removeClass('clicked');
            $("#mysql").removeClass('clicked');
            $("#php").removeClass('clicked');
            $("#server").removeClass('clicked');
            $("#apache").removeClass('clicked');
            $("#sass").removeClass('clicked');
        })
    });
    $('#sass').click(function () {
        $(this).fadeIn("slow", function () {
            $(this).addClass('clicked');
            $("#showall").removeClass('clicked');
            $("#website").removeClass('clicked');
            $("#jquery").removeClass('clicked');
            $("#javascript").removeClass('clicked');
            $("#mysql").removeClass('clicked');
            $("#php").removeClass('clicked');
            $("#server").removeClass('clicked');
            $("#apache").removeClass('clicked');
            $("#laravel").removeClass('clicked');
        })
    });
});