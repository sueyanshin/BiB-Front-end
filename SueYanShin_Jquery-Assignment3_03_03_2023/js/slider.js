$('.single-item').slick({
  autoplay: true,
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


$('.one-time').slick({

  infinite: true,
  speed: 300,
  slidesToShow: 1,
  adaptiveHeight: true
});

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

$('.fade').slick({

  infinite: true,
  speed: 500,
  fade: true,
  cssEase: 'linear'
});

$('.single-item-rtl').slick({
  rtl: true
});

$('.slider-single').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: true,
  fade: false,
  adaptiveHeight: true,
  infinite: false,
 useTransform: true,
  speed: 400,
  cssEase: 'cubic-bezier(0.77, 0, 0.18, 1)',
});

$('.slider-nav')
  .on('init', function(event, slick) {
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

$('.slider-single').on('afterChange', function(event, slick, currentSlide) {
  $('.slider-nav').slick('slickGoTo', currentSlide);
  var currrentNavSlideElem = '.slider-nav .slick-slide[data-slick-index="' + currentSlide + '"]';
  $('.slider-nav .slick-slide.is-active').removeClass('is-active');
  $(currrentNavSlideElem).addClass('is-active');
});

$('.slider-nav').on('click', '.slick-slide', function(event) {
  event.preventDefault();
  var goToSingleSlide = $(this).data('slick-index');

  $('.slider-single').slick('slickGoTo', goToSingleSlide);
});