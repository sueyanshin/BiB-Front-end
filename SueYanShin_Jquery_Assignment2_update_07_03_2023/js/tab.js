$(document).ready(function () {
    $('.tabs li:first-child').addClass('active');
    $('.tab-content').hide();
    $('.tab-content:first').show();
    $('.tabs li').click(function () {
        var tabID = $(this).attr('data-tab');
        $('.tabs li').removeClass('active');
        $(this).addClass('active');
        $('.tab-content').hide();
        $('#tab-' + tabID).fadeIn();
        return false;
    });
});