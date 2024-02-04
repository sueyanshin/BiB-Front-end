$(document).ready(function () {
    $('.menu').on('click', function () {
        $(this).toggleClass('active');
        $('.gnav').toggleClass('is-show');
    });
});
