$(function () {
    $("#menu-toggle-icon").click(function (e) { 
        e.preventDefault();
        $("#menu-toggle-icon").toggleClass("bi-x");
        if ($("#menu-toggle-icon").hasClass("bi-x")) {
            $(".toggle-menu").show("slow");
        } else {
            $(".toggle-menu").hide("slow");
        }
    });
})