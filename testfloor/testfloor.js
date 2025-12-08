$(document).ready(function() {
    
    $(window).on("pageshow", function() {
        $("body").removeClass("fade-out");
    });

    $(".backtoelevator").click(function() {

        let url = $(this).data("url");
        if (!url) return;

        $("body").addClass("fade-out");

        setTimeout(function() {
            window.location.href = url;
        }, 1500);
        

    });

});