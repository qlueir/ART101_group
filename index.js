$(document).ready(function() {

    //array 
    var floor_visited = [false, false]
    //index.html/ a floor visited = permantently delete .title div
    
    
    

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

    $(".buttons button").click(function() {
        ding.play();
        audio.pause();

        let url = $(this).data("url");
        if (!url) return;

        $("body").addClass("fade-out");

        setTimeout(function() {
            window.location.href = url;
        }, 1500);
        //ADD LOBBIE TRANSITION

    });

    //===================TITLE=========================
    let closeSound = document.getElementById("close-sound");

    //click start button, sound, hide title and reveal container
    $(".start-button").on("click", function () {

        $(".title").hide();
        $(".container").show();
    });

    //=====================moving from html to html===================
    
    //in different js,
    
        //back to elevator
    $(".backtoelevator").click(function() {
        $(".container").show();
        $(".title").hide();//find out how to current floor on page hide
    });

    //======================stupid many transitions====================

    $(".b4_button").click(function() {
    $(".starting scene").attr("src", "image/transition_b4");
    });

});
