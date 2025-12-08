$(document).ready(function() {
    

    //elevator music
    var audio = document.getElementById('background-audio');
    audio.volume = 0.3;
    audio.loop = true;
    audio.play();
    document.addEventListener('click', function () {
    audio.muted = false;
    }, { once: true });

    //ding transition
    let ding = new Audio ('image/ding.mp3')
    $(window).on("pageshow", function() {
        $("body").removeClass("fade-out");
    });

    //======================stupid many transitions====================
    
    $(".buttons button").click(function() {
        ding.play();
        audio.pause();

        let url = $(this).data("url");
        if (!url) return;

        let transitionImg = $(this).data("transition");

        $("#start").attr("src", transitionImg);
        $("body").addClass("fade-out");

        setTimeout(function() {
            window.location.href = url;
        }, 2000);
    });

    //===================TITLE=========================
    let closeSound = document.getElementById("close-sound");

    //click start button, sound, hide title and reveal container
    $(".start-button").on("click", function () {

        $(".title").hide();//DELETE TITLE WHEN REUTNRING
        $(".container").show();
    });
    
    // If returning from a floor → hide title
    const params = new URLSearchParams(window.location.search);
    if (params.get("fromFloor")) {
        $(".title").hide();
        $(".container").show();
    }
    //=====================moving from html to html===================
    
    //in different js,
    
        //back to elevator
    $(".backtoelevator").click(function() {
        $(".container").show();
        $(".title").hide();//find out how to current floor on page hide
    });


    /* May's replace image over image reference
        $(".peeping").hover(function() {
        $('#peephole').attr('src', 'images/cat_point5.jpg');
        yippee.play();
    }, function() {
        $('#peephole').attr('src', 'images/peephole.webp');
    });
    */

});
