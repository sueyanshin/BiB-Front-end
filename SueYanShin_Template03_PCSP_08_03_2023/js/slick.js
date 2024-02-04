$(document).ready(function () {
    $('.trend-slider').slick({
        dots: true,
        infinite: true,
        slidesToScroll: 3,
        slidesToShow: 3,
        arrows: true,
        responsive: [
            {
                breakpoint: 1160,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            },
        
        ]
  
    });


    
})