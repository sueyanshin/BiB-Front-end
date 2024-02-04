$(document).ready(function () {
    $('.tabs li:first-child').addClass('active');
    $('.tab-content').hide();
    $('.tab-content:first').show();
    $('.tabs li ').click(function () {
        $('.tabs li').removeClass('active');
        $(this).addClass('active');
        //var tabID = $(this).attr('data-tab');
        $('.tab-content').hide();
        //$('#tab-' + tabID).fadeIn();

        var activeTab = $(this).find('a').attr('href');
        $(activeTab).fadeIn();
        return false;
     
    });
});