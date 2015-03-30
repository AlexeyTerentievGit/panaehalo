(function () {
    "use strict";

    $('.navbar-brand, .top-scroll a').click(function () {
        if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '')
            || location.hostname == this.hostname) {

            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
            if (target.length) {
                $('html,body').animate({
                    scrollTop: target.offset().top
                }, 2000);
                return false;
            }
        }
    });

    var navbarHeight = $('.main-nav').height();
    $('a.btnAbout, a.hire').click(function () {
        if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '')
            || location.hostname == this.hostname) {

            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
            if (target.length) {
                $('html,body').animate({
                    scrollTop: target.offset().top - navbarHeight
                }, 2000);
                return false;
            }
        }
    });

    $('.navbar-nav').onePageNav({
        scrollOffset: navbarHeight,
        scrollSpeed: 1000,
        scrollThreshold: 0.25
    });

    //============================ function =========================================
    startSlider();
    imgHover();
    lightboxPhoto();
    winHeight();
    barScroll();

    //============================ nav container sticky =========================================
    $(".navbar").sticky({topSpacing: 0});
    $('ul.nav li a').click(function () {
        $('.navbar-inverse .navbar-collapse').removeClass('in')
    });
})();

$(window).load(function () {
    navScroll();

    if ($('.navbar-toggle').css('display') != 'none') {
        $('#room1title').appendTo('#room1mtitle');
        $('#room1title').css('text-align', 'center');
        $('#room2title').appendTo('#room2mtitle');
        $('#room2title').css('text-align', 'center');
        $('#room3title').appendTo('#room3mtitle');
        $('#room3title').css('text-align', 'center');
    }
});

$(window).resize(function () {
    navScroll();
    winHeight();

});
$(window).scroll(function () {
    navScroll();
});

//================================ function ========================================
function imgHover() {
    $('.thumb-img').hover(function () {
        $(this).find('.link-search, .link-chain').fadeIn();
        $('.link-search').removeClass('fadeOutLeft').addClass('fadeInLeft');
        $('.link-chain').removeClass('fadeOutRight').addClass('fadeInRight');
        $(this).children('.folio-caption').animate({
            bottom: '0px'
        });

    }, function () {
        $(this).find('.link-search, .link-chain').fadeOut();
        $('.link-search').removeClass('fadeInLeft').addClass('fadeOutLeft');
        $('.link-chain').removeClass('fadeInRight').addClass('fadeOutRight');
        $(this).children('.folio-caption').animate({
            bottom: '-58px'
        });

    });
}

function lightboxPhoto() {
    $(document).delegate('*[data-toggle="lightbox"]', 'click', function (event) {
        event.preventDefault();
        $(this).ekkoLightbox();
    });
}

function navScroll() {
}

function winHeight() {
    var wHeight = $(window).height();
    $('.header').height(wHeight);
}

function barScroll() {
    setTimeout(function () {

        $('.progress-bar').each(function () {
            var me = $(this);
            var pe = $(this).children('.precent-value');
            var perc = me.attr("aria-valuenow");

            var current_perc = 0;

            var progress = setInterval(function () {
                if (current_perc >= perc) {
                    clearInterval(progress);
                } else {
                    current_perc += 1;
                    me.css('width', (current_perc) + '%');
                }

                pe.text((current_perc) + '%');

            }, 90);
        });
    }, 300);
}

//==================================== slider ============================//
function startSlider() {

    var mainDiv = $(".header");
    var imageNumber = 1;

    setInterval(hideBack, 10000);

    function hideBack() {
        mainDiv.animate({opacity: 0}, 2000, "linear", showNewBack);
    }

    function showNewBack() {
        (imageNumber == 7) ? imageNumber = 1 : imageNumber++;
        mainDiv.css("background", "url('img/photo/main/" + imageNumber + ".jpg') no-repeat center fixed");
        mainDiv.css("background-size", "cover");
        mainDiv.animate({opacity: 1}, 2000);
    }
}