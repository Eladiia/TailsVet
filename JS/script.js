(function ($) {
    "use strict";

    // Sticky Navbar
    $(window).scroll(function () {
        if ($(this).scrollTop() > 40) {
            $('.navbar').addClass('sticky-top');
        } else {
            $('.navbar').removeClass('sticky-top');
        }
    });

    // Dropdown on mouse hover
    $(document).ready(function () {
        function toggleNavbarMethod() {
            if ($(window).width() > 992) {
                $('.navbar .dropdown').on('mouseover', function () {
                    $('.dropdown-toggle', this).trigger('click');
                }).on('mouseout', function () {
                    $('.dropdown-toggle', this).trigger('click').blur();
                });
            } else {
                $('.navbar .dropdown').off('mouseover').off('mouseout');
            }
        }
        toggleNavbarMethod();
        $(window).resize(toggleNavbarMethod);
    });



    // Back to top button
    $(window).scroll(function () {
        if ($(this).scrollTop() > 100) {
            $('.back-to-top').fadeIn('slow');
        } else {
            $('.back-to-top').fadeOut('slow');
        }
    });
    $('.back-to-top').click(function () {
        $('html, body').animate({ scrollTop: 0 }, 1500, 'easeInOutExpo');
        return false;
    });


    // Product carousel
    $(".product-carousel").owlCarousel({
        autoplay: true,
        smartSpeed: 1000,
        margin: 45,
        dots: false,
        loop: true,
        nav: true,
        navText: [
            '<i class="bi bi-arrow-left"></i>',
            '<i class="bi bi-arrow-right"></i>'
        ],
        responsive: {
            0: {
                items: 1
            },
            768: {
                items: 2
            },
            992: {
                items: 3
            },
            1200: {
                items: 4
            }
        }
    });


    //Loading screen

    $(window).on("load", function () {
        $(".loader-wrapper").fadeOut("slow");
    });

    var carousels = function () {
        $(".owl-carousel1").owlCarousel({
            loop: true,
            center: true,
            margin: 0,
            responsiveClass: true,
            nav: false,
            responsive: {
                0: {
                    items: 1,
                    nav: false
                },
                680: {
                    items: 2,
                    nav: false,
                    loop: false
                },
                1000: {
                    items: 3,
                    nav: true
                }
            }
        });
    };

    (function ($) {
        carousels();

    })();

    function rotate() {
        var lastChild = $('.slider div:last-child').clone();
        /*$('#test').html(lastChild)*/
        $('.slider div').removeClass('firstSlide')
        $('.slider div:last-child').remove();
        $('.slider').prepend(lastChild)
        $(lastChild).addClass('firstSlide')
    }

    window.setInterval(function () {
        rotate()
    }, 4000);


    function Utils() { }
    Utils.prototype = {
        constructor: Utils,
        isElementInView: function (element, fullyInView) {
            var pageTop = $(window).scrollTop();
            var pageBottom = pageTop + $(window).height();
            var elementTop = $(element).offset().top;
            var elementBottom = elementTop + $(element).height();

            if (fullyInView === true) {
                return ((pageTop < elementTop) && (pageBottom > elementBottom));
            } else {
                return ((elementTop <= pageBottom) && (elementBottom >= pageTop));
            }
        }
    };

    var Utils = new Utils();
    $(window).on('load', addFadeIn());

    $(window).scroll(function () {
        addFadeIn(true);
    });

    function addFadeIn(repeat) {
        var classToFadeIn = ".will-fadeIn";

        $(classToFadeIn).each(function (index) {
            var isElementInView = Utils.isElementInView($(this), false);
            if (isElementInView) {
                if (!($(this).hasClass('fadeInRight')) && !($(this).hasClass('fadeInLeft'))) {
                    if (index % 2 == 0) $(this).addClass('fadeInRight');
                    else $(this).addClass('fadeInLeft');
                }
            } else if (repeat) {
                $(this).removeClass('fadeInRight');
                $(this).removeClass('fadeInLeft');
            }
        });
    }




})(jQuery);

