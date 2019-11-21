$(document).ready(function () {
    navScroll();
    $(window).scroll(function (event) {
        navScroll();
    });
    if($(window).width() < 575){
        $('.xs--reset--padding').removeClass(function (index, className) {
            return (className.match(/\bpr-\S+/g) || []).join(' ');
        });
        $('.xs--reset--padding').removeClass(function (index, className) {
            return (className.match(/\bpl-\S+/g) || []).join(' ');
        });
    }
    $('.btn--nav').on('click',function(){
                $('.social').toggle(200).css('display','inline-block');
            });
    $('.moment').on('click', function() {
        var img = $(this).find('img').attr('src');
        $('#moments-preview').attr('src', img);
        $('#moments-modal').modal('show');
    });
});

$(function() {
    $('a[href*="#"]:not([href="#"])').click(function() {
        if($(this).hasClass('self')){
        }
        else{
            if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
                var target = $(this.hash);
                target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
                if (target.length) {
                    $('html, body').animate({
                        scrollTop: target.offset().top - 80
                    }, 1000);
                    return false;
                }
            }
        }
    });
});


function navScroll(){
    var scroll = $(window).scrollTop();
    if (scroll > 0) {
        $('nav').addClass('navbar-fixed');
    } else {
        $('nav').removeClass('navbar-fixed');
    }
}

$('.collapse').on('show.bs.collapse', function () {
    $(this).prev().addClass('opened');
});
$('.collapse').on('hide.bs.collapse', function () {
    $(this).prev().removeClass('opened');
});

$('.collapse--module').on('show.bs.collapse', function(){
    var btn = $(this).next();
    btn.addClass('opened');
    btn.text('Show less');
});
$('.collapse--module').on('shown.bs.collapse', function(){
    $(this).parent().addClass('expanded');
});

$('.collapse--module').on('hide.bs.collapse', function(){
    var btn = $(this).next();
    btn.removeClass('opened');
    btn.text('Show more');
});
$('.collapse--module').on('hidden.bs.collapse', function(){
    $(this).parent().removeClass('expanded');
});


// Youtube Popup
jQuery(function(){
	jQuery("a.youtube").YouTubePopUp();
});