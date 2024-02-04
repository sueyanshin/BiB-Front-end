$(document).ready(function () {
    $(".p1").click(function () {
        alert("The paragraph was clicked.");
    });
    $(".p2").dblclick(function () {
        alert("The paragraph was double-clicked");
    });
    $(".p3").mouseenter(function () {
        $(".p3").css("background-color", "green");
    });

    $(".p3").mouseleave(function () {
        $(".p3").css("background-color", "grey");
    });

    $(".div1").mouseup(function () {
        $(this).after("<span style='color:blue;'>Mouse button released.</span>");
    });

    $(".div1").mousedown(function () {
        $(this).after("<span style='color:green;'>Mouse button pressed down.</span>");
    });
    $(".p4").hover(function () {
        $(this).css("background-color", "grey");
    }, function () {
        $(this).css("background-color", "pink");
    });

    $("input").focus(function () {
        $(this).css("background-color", "yellow");
    });
    $("input").blur(function () {
        $(this).css("background-color", "pink");
    });
    $(".p5").on("click", function () {
        alert("The paragraph was clicked.");
    });
    $("button").hover(function () {
        $(this).css("background-color", "#fbc940");
    }, function () {
        $(this).css("background-color", "pink");
    });
    $(".hide-btn").click(function () {
        $(".p6").hide();
    });
    $(".show-btn").click(function () {
        $(".p6").show();
    });
    $(".fade-in").click(function () {
        $(".div2").fadeIn();
    });
    $(".fade-out").click(function () {
        $(".div2").fadeOut("slow");
    });
    $(".fade-toggle").click(function () {
        $(".div2").fadeToggle("slow");
    });
    $("fade-to").click(function () {
        $(".div2").fadeTo(1000, 0.4);
    });

    //$(".flip").click(function(){
    //  $(".panel").slideUp("slow");
    //});
    //$(".flip").click(function(){
    //  $(".panel").slideDown("slow");
    //});

    $(".flip").click(function () {
        $(".panel").slideToggle("slow");
    });

    $(".animate-btn").click(function () {
        $(".ani-box").animate({ width: "50%" });
    });

    $(".set-text").click(function () {
        $("#test1").text("Hello world!");
    });
    $(".set-html").click(function () {
        $("#test2").html("<b>Hello world!</b>");
    });
    $(".set-value").click(function () {
        $("#test3").val("jQuery");
    });
    $(".remove").click(function () {
        $("#add-remove").remove();
    });
    $(".empty").click(function () {
        $("#add-remove").empty();
    });
    $("#append").click(function () {
        $(".txt").append(" <b>Appended text</b>.");
    });
    $("#prepend").click(function () {
        $(".txt").prepend(" <b>prepended text</b>.");
    });
    $("#before").click(function () {
        $(".txt").before("<p>Before text!</p>");
    });
    $("#after").click(function () {
        $(".txt").after("<p>After text!</p>");
    });
    $("#toggle").click(function () {
        $(".txt").toggleClass("txt-change");
    });



});
