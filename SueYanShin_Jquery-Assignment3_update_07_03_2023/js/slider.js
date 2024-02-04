$(document).ready(function () {
    $('.single-item').slick({
        autoplay: true,
        dots: true,
        autoplaySpeed: 2000,
    });
    $('.multiple-items').slick({
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 3,

    });

    $('.responsive').slick({

        infinite: false,
        speed: 300,
        slidesToShow: 4,
        slidesToScroll: 4,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    });


    $('.variable-width').slick({

        infinite: true,
        speed: 300,
        slidesToShow: 1,
        centerMode: true,
        variableWidth: true
    });


    $('.adaptive-height').slick({

        infinite: true,
        speed: 300,
        slidesToShow: 1,
        adaptiveHeight: true
    });
    $('.data-attri').slick();

    $('.center').slick({
        centerMode: true,
        centerPadding: '60px',
        slidesToShow: 3,
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    arrows: false,
                    centerMode: true,
                    centerPadding: '40px',
                    slidesToShow: 3
                }
            },
            {
                breakpoint: 480,
                settings: {
                    arrows: false,
                    centerMode: true,
                    centerPadding: '40px',
                    slidesToShow: 1
                }
            }
        ]
    });

    $('.lazy').slick({
        lazyLoad: 'ondemand',
        slidesToShow: 3,
        slidesToScroll: 1
    });

    $('.autoplay').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
    });

    $('.fade').slick({

        infinite: true,
        speed: 500,
        fade: true,
        cssEase: 'linear'
    });
    //add remove
    $('.add-remove').slick({
        slidesToShow: 3,
        slidesToScroll: 3
    });
    var slideIndex = 1;
    $('.js-add-slide').on('click', function () {
        slideIndex++;
        $('.add-remove').slick('slickAdd', '<div><h3>' + slideIndex + '</h3></div>');
    });

    $('.js-remove-slide').on('click', function () {
        $('.add-remove').slick('slickRemove', slideIndex - 1);
        if (slideIndex !== 0) {
            slideIndex--;
        }
    });
    //filtering

    $('.filtering').slick({
        slidesToShow: 4,
        slidesToScroll: 4
    });

    var filtered = false;

    $('.js-filter').on('click', function () {
        if (filtered === false) {
            $('.filtering').slick('slickFilter', ':even');
            $(this).text('Unfilter Slides');
            filtered = true;
        } else {
            $('.filtering').slick('slickUnfilter');
            $(this).text('Filter Slides');
            filtered = false;
        }
    });
    // Destroy
    $('.destroy').slick('unslick');


    // rtl
    $('.rtl').slick({
        slidesToShow: 2,
        slidesToScroll: 1,
        arrow: true,
        rtl: true,

    });

    //thumbsnail slider
    $('.slider-single').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        fade: false,
        adaptiveHeight: true,
        infinite: false,
        useTransform: true,
        speed: 400,
        cssEase: 'cubic-bezier(0.77, 0, 0.18, 1)',
    });

    $('.slider-nav')
        .on('init', function (event, slick) {
            $('.slider-nav .slick-slide.slick-current').addClass('is-active');
        })
        .slick({
            slidesToShow: 7,
            slidesToScroll: 7,
            dots: false,
            focusOnSelect: false,
            infinite: false,
            responsive: [{
                breakpoint: 1024,
                settings: {
                    slidesToShow: 5,
                    slidesToScroll: 5,
                }
            }, {
                breakpoint: 640,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 4,
                }
            }, {
                breakpoint: 420,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                }
            }]
        });

    $('.slider-single').on('afterChange', function (event, slick, currentSlide) {
        $('.slider-nav').slick('slickGoTo', currentSlide);
        var currrentNavSlideElem = '.slider-nav .slick-slide[data-slick-index="' + currentSlide + '"]';
        $('.slider-nav .slick-slide.is-active').removeClass('is-active');
        $(currrentNavSlideElem).addClass('is-active');
    });

    $('.slider-nav').on('click', '.slick-slide', function (event) {
        event.preventDefault();
        var goToSingleSlide = $(this).data('slick-index');

        $('.slider-single').slick('slickGoTo', goToSingleSlide);
    });
});