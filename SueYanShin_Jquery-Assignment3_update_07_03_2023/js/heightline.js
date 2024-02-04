$(document).ready(function () {
    $(function () {
        $(".box-one > div").heightLine();
    });
    $(".box-two > div").heightLine({
        maxWidth: 640,
    });
    $(".box-three > div").heightLine({
        minWidth: 640,
    });
    $(".box-four > div").heightLine({
        maxWidth: 700,
        minWidth: 500
    });
    $(".box-five > div").heightLine({
        fontSizeCheck: true
    });
});
