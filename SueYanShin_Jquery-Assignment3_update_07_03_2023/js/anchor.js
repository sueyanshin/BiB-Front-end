$(document).ready(function () {
    $('.links a').on('click', function (e) {
        var href = $(this).attr('href');
        $('html, body').animate({
            scrollTop: $(href).offset().top
        }, '300');
        e.preventDefault();
    });
});